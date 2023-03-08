import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MyOrdersComponent } from "./my-orders-component/my-orders.component";

const ordersRouterConfig: Routes = [
    { path: '', redirectTo: '/orders/my-orders', pathMatch: 'full' },
    { path: 'my-orders', component: MyOrdersComponent },
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