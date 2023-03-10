import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  public cart: Cart;
  public parcelas!: number;


  constructor () {
    this.cart = new Cart();
  }
}
