import { Route } from '@angular/router';
import { MyOrdersComponent } from './my-orders-component/my-orders.component';
import { OrderGuard } from 'src/app/services/order.guard';
import { CreateOrderComponent } from './create-order-component/create-order.component';

export const ORDERS_ROUTES: Route[] = [
  { path: '', redirectTo: '/orders/my-orders', pathMatch: 'full' },
  { path: 'my-orders', component: MyOrdersComponent },
  {
    path: 'create-order',
    component: CreateOrderComponent,
    canActivate: [OrderGuard],
    canMatch: [OrderGuard],
  },
];
