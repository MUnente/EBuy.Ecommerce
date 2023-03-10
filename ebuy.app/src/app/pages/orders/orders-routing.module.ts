import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MyOrdersComponent } from "./my-orders-component/my-orders.component";
import { CreateOrderComponent } from "./create-order-component/create-order.component";
import { OrderGuard } from "src/app/services/order.guard";

const ordersRouterConfig: Routes = [
    { path: '', redirectTo: '/orders/my-orders', pathMatch: 'full' },
    { path: 'my-orders', component: MyOrdersComponent },
    { path: 'create-order', component: CreateOrderComponent, canActivate: [OrderGuard], canMatch: [OrderGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(ordersRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class OrdersRoutingModule { }