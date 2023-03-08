import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './my-orders.component.html',
})
export class MyOrdersComponent implements OnInit {
  constructor (private orderService: OrderService) { }

  public orders!: Order[];

  ngOnInit(): void {
    const cliente = { id: 1 };

    this.orderService.getOrders(cliente.id).subscribe({
      next: data => this.orders = data,
      error: error => console.error(error)
    });
  }
}
