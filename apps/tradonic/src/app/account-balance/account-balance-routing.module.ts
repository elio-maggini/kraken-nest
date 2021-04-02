import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountBalancePage } from './account-balance.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: AccountBalancePage,
  },
];

@NgModule({
  declarations: [AccountBalancePage],
  imports: [RouterModule.forChild(routes), CommonModule, IonicModule],
  exports: [RouterModule],
})
export class AccountBalanceRoutingModule {}

