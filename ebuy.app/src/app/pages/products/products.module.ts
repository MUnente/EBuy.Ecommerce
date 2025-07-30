import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';

import { ProductService } from 'src/app/services/product.api.service';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    NavigationModule
],
  providers: [
    ProductService,
  ]
})
export class ProductsModule { }
