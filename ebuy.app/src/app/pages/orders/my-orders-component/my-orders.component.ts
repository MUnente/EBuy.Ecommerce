import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.api.service';
import { param } from 'src/app/models/param';

@Component({
  selector: 'app-orders',
  templateUrl: './my-orders.component.html',
})
export class MyOrdersComponent implements OnInit {
  constructor (private orderService: OrderService) { }

  public orders!: Order[];

  ngOnInit(): void {
    const params: param[] = [{ key: 'IdCliente', value: 1 }];

    this.orderService.getOrders(params).subscribe({
      next: data => this.orders = data,
      error: error => console.error(error)
    });
  }
}
