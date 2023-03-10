import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { VerticalSliderModule } from 'src/app/components/vertical-slider/vertical-slider.module';

import { ProductsComponent } from './products-component/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductService } from 'src/app/services/product.api.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    NavigationModule,
    ProductCardModule,
    VerticalSliderModule
  ],
  providers: [
    ProductService,
  ]
})
export class ProductsModule { }
