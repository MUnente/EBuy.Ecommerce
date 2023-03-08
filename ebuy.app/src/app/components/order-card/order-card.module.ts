import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './my-order-card-component/my-order-card.component';

@NgModule({
  declarations: [
    OrderCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderCardComponent
  ]
})
export class OrderCardModule { }
