import { Component, OnInit } from '@angular/core';
import { KrakenService } from '@kraken-nest/client-rest';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'kraken-nest-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  tradeItems = [];

  constructor(private krakenService: KrakenService,
              private modal: ModalService) {
    this.modal.createLoad( () =>  this.krakenService.getTradeHistory()).subscribe((res) => {
      Object.keys(res.result.trades).map((key) => {
        this.tradeItems.push(Object.assign({}, res.result.trades[key], {key}));
      });
    });
  }
}
