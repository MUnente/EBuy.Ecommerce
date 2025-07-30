import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { OrdersRoutingModule } from './orders-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';

import { OrderGuard } from 'src/app/services/order.guard';
import { OrderService } from 'src/app/services/order.api.service';
import { ExternalDataApiService } from 'src/app/services/external-data.api.service';
import { UserApiService } from 'src/app/services/user.api.service';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    OrdersRoutingModule,
    NavigationModule
],
  providers: [
    provideNgxMask(),
    OrderGuard,
    OrderService,
    ExternalDataApiService,
    UserApiService
  ]
})
export class OrdersModule { }
