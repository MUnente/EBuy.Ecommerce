import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OffCanvaComponent } from './off-canva-component/off-canva.component';
import { ButtonComponent } from './button-component/button.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    OffCanvaComponent,
    ButtonComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OffCanvaComponent,
    ButtonComponent
  ]
})
export class CartOffCanvaModule { }
