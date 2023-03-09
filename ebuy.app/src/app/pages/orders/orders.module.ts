import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';

import { MyOrdersComponent } from './my-orders-component/my-orders.component';

import { OrdersRoutingModule } from './orders-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';
import { OrderCardModule } from 'src/app/components/order-card/order-card.module';

import { OrderService } from 'src/app/services/order.api.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OrdersRoutingModule,
    NavigationModule,
    OrderCardModule
  ],
  providers: [
    OrderService
  ]
})
export class OrdersModule { }
