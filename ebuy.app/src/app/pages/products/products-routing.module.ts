import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductsComponent } from "./products-component/products.component";

const productsRouterConfig: Routes = [
    { path: '', component: ProductsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(productsRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule { }