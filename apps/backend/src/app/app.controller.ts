import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KrakenService } from '../services/kraken/kraken.service';
import { from, Observable } from 'rxjs';
import { KrakenApiResponse } from '@kraken-nest/api-interfaces';
import { PrivteEndPoints, PublicEndPoints } from '../services/kraken/const';

@Controller()
export class AppController {
  constructor(private readonly krakenService: KrakenService) {
    this.krakenService.key = process.env.KEY;
    this.krakenService.secret =   process.env.SECRET;
  }

  @Get('trade-history')
  getTradeHistory(): Observable<KrakenApiResponse> {
    return from(this.krakenService.request(PrivteEndPoints.tradesHistory));
  }

  @Get('account-balance')
  getAccountBalance(): Observable<KrakenApiResponse> {
    return from(this.krakenService.request(PrivteEndPoints.balance));
  }

  @Post('ticker')
  getTicker(@Body() pair): Observable<KrakenApiResponse> {
    return from(this.krakenService.request(PublicEndPoints.ticker, pair));
  }
}
