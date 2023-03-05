import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';

import { ProductsComponent } from './products-component/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavigationModule,
    ProductCardModule
  ]
})
export class ProductsModule { }
