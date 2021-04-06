import { Component } from '@angular/core';
import { KrakenService } from '@kraken-nest/client-rest';
import { ModalService } from '../../services/modal.service';
import { ViewWillEnter } from '@ionic/angular';
import { TradingPair } from '@kraken-nest/api-interfaces';

@Component({
  selector: 'kraken-account-balance',
  templateUrl: 'account-balance.page.html',
  styleUrls: ['account-balance.page.scss'],
})
export class AccountBalancePage implements ViewWillEnter{
  constructor(private krakenService: KrakenService,
              private modal: ModalService) {
  }

  accountBalance = [];

  ionViewWillEnter(): void {
    this.modal.createLoad( () =>  this.krakenService.getAccountBalance()).subscribe( (res1) => {
      Object.keys(res1.result).map((key) => {
        if (+res1.result[key] < 0.00000000001) return;
        const myJsonObject = { token: key, balance: res1.result[key]};
        const tradingPair = TradingPair.map[key]
        this.krakenService.getTicker(TradingPair.map[key]).toPromise().then((res2) => {
          myJsonObject['total'] = res2.result[tradingPair].p[1] * myJsonObject.balance;
          console.log('myjson', myJsonObject);
          this.accountBalance.push(myJsonObject);
        });
      });
    });
  }



}
