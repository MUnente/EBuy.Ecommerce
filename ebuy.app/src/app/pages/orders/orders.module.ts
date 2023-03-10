import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MyOrdersComponent } from './my-orders-component/my-orders.component';

import { OrdersRoutingModule } from './orders-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';
import { OrderCardModule } from 'src/app/components/order-card/order-card.module';

import { CreateOrderComponent } from './create-order-component/create-order.component';
import { OrderGuard } from 'src/app/services/order.guard';
import { OrderService } from 'src/app/services/order.api.service';
import { CartOffCanvaModule } from 'src/app/components/cart-off-canva/cart-off-canva.module';

@NgModule({
  declarations: [
    MyOrdersComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    OrdersRoutingModule,
    NavigationModule,
    OrderCardModule,
    CartOffCanvaModule
  ],
  providers: [
    OrderGuard,
    OrderService
  ]
})
export class OrdersModule { }
