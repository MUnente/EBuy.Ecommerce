import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';

import { bootstrapApplication } from "@angular/platform-browser";

import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

import { AppComponent } from "./app/app.component";
import { AuthGuard } from "./app/services/auth.guard";
import { AuthService } from "./app/services/auth.service";
import { BrandService } from "./app/services/brand.api.service";
import { ExternalDataApiService } from "./app/services/external-data.api.service";
import { OrderGuard } from "./app/services/order.guard";
import { OrderService } from "./app/services/order.api.service";
import { ProductService } from "./app/services/product.api.service";
import { UserApiService } from "./app/services/user.api.service";

import { APP_ROUTES } from "./app/app.routes";

registerLocaleData(localePt);

bootstrapApplication(AppComponent, {
  providers: [
    AuthGuard,
    AuthService,
    BrandService,
    ExternalDataApiService,
    OrderGuard,
    OrderService,
    ProductService,
    UserApiService,
    provideRouter(APP_ROUTES),
    provideHttpClient()
  ]
}).catch(err => console.error(err));