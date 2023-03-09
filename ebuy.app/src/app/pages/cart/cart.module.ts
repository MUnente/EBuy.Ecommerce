import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';

import { CartComponent } from './cart-component/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule,
    NavigationModule
  ],
})
export class CartModule { }
