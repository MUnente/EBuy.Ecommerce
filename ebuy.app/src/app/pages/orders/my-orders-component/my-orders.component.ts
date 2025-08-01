import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from 'src/app/components/navigation/top-menu-component/top-menu.component';
import { OrderCardComponent } from 'src/app/components/order-card/my-order-card-component/my-order-card.component';
import { FooterComponent } from 'src/app/components/navigation/footer-component/footer.component';
import { IOrder } from 'src/app/models/interface/IOrder';
import { OrderService } from 'src/app/services/order.api.service';
import { IParam } from 'src/app/models/interface/IParam';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    TopMenuComponent,
    OrderCardComponent,
    FooterComponent
  ],
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
