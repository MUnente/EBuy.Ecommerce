import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';

import { MyOrdersComponent } from './my-orders-component/my-orders.component';

import { OrdersRoutingModule } from './orders-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NavigationModule
  ]
})
export class OrdersModule { }
