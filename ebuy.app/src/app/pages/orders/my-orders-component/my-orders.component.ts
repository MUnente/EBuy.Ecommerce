import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/interface/IOrder';
import { OrderService } from 'src/app/services/order.api.service';
import { IParam } from 'src/app/models/interface/IParam';

@Component({
  selector: 'app-orders',
  templateUrl: './my-orders.component.html',
})
export class MyOrdersComponent implements OnInit {
  constructor (private orderService: OrderService) { }

  public orders!: IOrder[];

  ngOnInit(): void {
    const params: IParam[] = [{ key: 'IdCliente', value: 1 }];

    this.orderService.getOrders(params).subscribe({
      next: data => this.orders = data,
      error: error => console.error(error)
    });
  }
}
