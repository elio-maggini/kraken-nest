import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KrakenAccountBalance, KrakenApiResponse, KrakenTicker, KrakenTradeHistory } from '@kraken-nest/api-interfaces';

@Injectable()
export class KrakenService {
  apiPath = 'http://localhost:3333/api/';

  constructor(private http: HttpClient) {
  }

  private get<T>(path: string, options: Record<string, unknown>): Observable<T> {
    return this.http.get(path, options) as Observable<T>
  }

  private post<T>(path: string, body: Record<string, unknown>, options: Record<string, unknown>): Observable<T> {
    return this.http.post(path, body ?? {}, options) as Observable<T>;
  }

  getTradeHistory():Observable<KrakenTradeHistory>  {
    return this.get( this.apiPath + 'trade-history', {});
  }

  getAccountBalance():Observable<KrakenAccountBalance>  {
    return this.get( this.apiPath + 'account-balance', {});
  }

  getTicker(pair: string):Observable<KrakenTicker> {
    return this.post(this.apiPath + 'ticker', {pair:pair}, {});
  }
}
