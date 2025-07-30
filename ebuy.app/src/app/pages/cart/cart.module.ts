import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule,
    NavigationModule
  ],
})
export class CartModule { }
