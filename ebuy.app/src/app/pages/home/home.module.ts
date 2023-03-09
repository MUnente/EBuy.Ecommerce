import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from '../../components/navigation/navigation.module';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { BrandCardModule } from 'src/app/components/brand-card/brand-card.module';

import { HomeComponent } from './home-component/home.component';

import { BrandService } from 'src/app/services/brand.api.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    NavigationModule,
    CarouselModule,
    BrandCardModule
  ],
  providers: [
    BrandService
  ]
})
export class HomeModule { }
