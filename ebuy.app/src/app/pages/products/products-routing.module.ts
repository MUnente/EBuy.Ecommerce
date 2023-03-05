import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductsComponent } from "./products-component/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const productsRouterConfig: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'details/:id', component: ProductDetailsComponent }
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