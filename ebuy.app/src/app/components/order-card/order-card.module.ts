import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './my-order-card-component/my-order-card.component';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule
  ],
  // ...standalone: removido exports...
})
export class OrderCardModule { }
