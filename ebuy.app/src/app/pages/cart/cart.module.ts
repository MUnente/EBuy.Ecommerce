import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart-component/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';

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
