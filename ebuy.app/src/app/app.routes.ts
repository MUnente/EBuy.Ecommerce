import { Route } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

export const APP_ROUTES: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home-component/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.routes').then((m) => m.ORDERS_ROUTES),
      canActivate: [AuthGuard],
      canMatch: [AuthGuard]
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart-component/cart.component').then(
        (m) => m.CartComponent
      ),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found-component/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
