import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import got from 'got';
import { endPoints, defaults, ConfigurationErrorMessage, InvalidEndpointErrorMessage } from './const';
import * as qs from 'qs';
import { Configuration, KrakenApiResponse } from '@kraken-nest/api-interfaces';
import { BinaryToTextEncoding } from 'crypto';

@Injectable()
export class KrakenService {

  private _key: string;
  private _secret: string;

  set key (input: string) {
    this._key = input;
  }

  set secret (input: string) {
    this._secret = input;
  }

  /**
   * This method makes a public or private API request.
   * @param  {String}   endPoint   The API method (public or private)
   * @param  {String}   params     Arguments to pass to the api call
   * @param  {String}   config     The variables needed for personalized access
   * @return {Object}              The request as Promise
   */
  public request(endPoint: string,  params = {}, config = {}): Promise<KrakenApiResponse> {
    // use our start up defaults if no over ride
    if (!config['key'] && !config['secret']) {
      config = {
        key: this._key,
        secret: this._secret
      }
    }

    const configuration:Configuration = Object.assign({}, defaults, config);

    if(endPoints.public.includes(endPoint)) {
      return this.publicMethod(endPoint, configuration, params);
    }
    else if(endPoints.private.includes(endPoint)) {
      if (configuration.key === '' || configuration.secret ==='') {
        throw new Error(ConfigurationErrorMessage);
      }
      return this.privateMethod(endPoint, configuration, params);
    }
    else {
      throw new Error(InvalidEndpointErrorMessage + endPoint);
    }
  }

  /**
   * This method makes a public API request.
   * @param  {String}   endPoint   The API method (public or private)
   * @param  {Function} callback A callback function to be executed when the request is complete
   * @param  {Object}   params   Arguments to pass to the api call
   * @return {Object}            The request object
   */
  private publicMethod(endPoint: string, config: Configuration, params : Record<string, unknown>): Promise<KrakenApiResponse> {
    const path     = '/' + config.version + '/public/' + endPoint;
    const url      = config.url + path;
    return this.rawRequest(url, {}, params, config.timeout);
  }

  /**
   * This method makes a private API request.
   * @param  {String}   endPoint The API method (public or private)
   * @param  {Function} callback A callback function to be executed when the request is complete
   * @param  {Object}   config   Configuration to pass to the api call
   * @param  {Object}   params   Arguments to pass to the api call
   * @return {Object}            The request object
   */
  private privateMethod(endPoint, config: Configuration, params: Record<string, unknown>): Promise<KrakenApiResponse> {
    const path = '/' + config.version + '/private/' + endPoint;
    const url  = config.url + path;
    const nonce = Date.now().valueOf() * 1000 ;

    // Body must contain the nonce also otp if it is enabled
    // add other needed for the request here
    let data = {
      'nonce': nonce
    }

    data = Object.assign({}, data, params);

    // you can try with this method
    const signature = this.signRequest(path, nonce, config.secret,data);

    const headers = {
      'API-Key'  : config.key,
      'API-Sign' : signature,
    };

    return this.rawRequest(url, headers, data, config.timeout);
  }

// Send an API request
  private async rawRequest(url, headers, data, timeout): Promise<KrakenApiResponse> {
    // Set custom User-Agent string
    headers['User-Agent'] = 'Kraken Javascript API Client';

    const options = { headers, timeout };

    Object.assign(options, {
      method : 'POST',
      body   : qs.stringify(data),
    });

    const { body } = await got(url, options);
    const response = JSON.parse(body);

    if(response.error && response.error.length) {
      const error = response.error
        .filter((e) => e.startsWith('E'))
        .map((e) => e.substr(1));

      if(!error.length) {
        throw new Error("Kraken API returned an unknown error");
      }

      throw new Error(error.join(', '));
    }

    return response;
  }

  private signRequest(endpoint, nonce, secret, data ) {
    // API-Sign = Message signature using HMAC-SHA512 of (URI path + SHA256(nonce + POST data)) and base64 decoded secret API key
    // converting body data in to url format ex {nonce=2343242343} using qs lib
    const message       = qs.stringify(data);
    const secret_buffer = Buffer.from(secret, 'base64');
    const hash          = crypto.createHash('sha256');
    const hmac          = crypto.createHmac('sha512', secret_buffer);
    const hash_digest   = hash.update(nonce + message).digest(<BinaryToTextEncoding>'binary');
    const hmac_digest   = hmac.update(endpoint + hash_digest, 'binary').digest('base64');
    return hmac_digest;
  }

}
