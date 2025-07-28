import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card-component/product-card.component';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    RouterModule
  ],
  // ...standalone: removido exports...
})
export class ProductCardModule { }
