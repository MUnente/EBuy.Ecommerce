import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart-component/cart.component';

const cartRoutingConfig: Routes = [
    { path: '', component: CartComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(cartRoutingConfig)
    ],
    exports: [
        RouterModule
    ],
})
export class CartRoutingModule { }
