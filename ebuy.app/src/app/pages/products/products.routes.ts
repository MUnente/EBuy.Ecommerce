import { Route } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products-component/products.component';

export const PRODUCTS_ROUTES: Route[] = [
  { path: '', component: ProductsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
];
