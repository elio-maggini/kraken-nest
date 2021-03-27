import {
  ConfigurationErrorMessage,
  defaults,
  endPoints,
  InvalidEndpointErrorMessage,
  InvalidKeyErrorMessage
} from './const';
import { KrakenApiResponse } from '@kraken-nest/api-interfaces';
import { KrakenService } from './kraken.service';

describe('kraken', () => {
  let service: KrakenService;
  beforeEach(() => { service = new KrakenService(); });

  it('api should throw error on invalid endpoint', async() => {
    try {
      const response: KrakenApiResponse = await service.request('Foo', defaults);

    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(InvalidEndpointErrorMessage + 'Foo');
    }
  });

  it('api should work with public method without key/secret', async() => {
    const response: KrakenApiResponse = await service.request('AssetPairs', defaults);
    expect(response.error.length).toEqual(0);
    expect(response.result['XXBTZUSD']).toBeTruthy();
    // expect(mockComponent.callback).toHaveBeenCalledWith(response, null);
  });

  it('api should work with public method requiring parameter', async() => {
    const response: KrakenApiResponse = await service.request('Assets', defaults, {asset: 'XBT'});
    expect(response.error.length).toEqual(0);
    expect(response.result['XXBT']).toBeTruthy();
    //expect(mockComponent.callback).toHaveBeenCalledWith(response, null);
  });

  it('api should throw error on private endpoint without key/secret', async() => {
    try {
      const response: KrakenApiResponse = await service.request('Balance', defaults);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(ConfigurationErrorMessage);
    }
  });

  it('api should throw error on private endpoint with invalid key', async() => {
    try {
      defaults.key = 'foo';
      defaults.secret = 'bar';
      const response: KrakenApiResponse = await service.request('Balance', defaults);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(InvalidKeyErrorMessage);
    }
  });

  // TODO figure out a way to get this test to run without exposing secret.
  xit('api should work with valid secret', async() => {
    defaults.key = '';
    defaults.secret = '';
    const response: KrakenApiResponse = await service.request('Balance', defaults);
    expect(response.error.length).toEqual(0);
  });
});
