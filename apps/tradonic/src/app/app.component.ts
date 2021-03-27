import { Component, OnInit } from '@angular/core';
import { KrakenService } from '@kraken-nest/client-rest';
import { ModalService } from '../services/modal.service';
import { KrakenTradeHistory } from '@kraken-nest/api-interfaces';


@Component({
  selector: 'kraken-nest-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  tradeItems = [];

  constructor(private krakenService: KrakenService,
              private modal: ModalService) {
  }

  ngOnInit(): void {
    this.modal.createLoad( () =>  this.krakenService.getTradeHistory()).subscribe((res) => {
     Object.keys(res.result.trades).map((key) => {
       this.tradeItems.push(Object.assign({}, res.result.trades[key], {key}));
     });
    });
  }


}
