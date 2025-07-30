import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from '../../components/navigation/navigation.module';

import { BrandService } from 'src/app/services/brand.api.service';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    NavigationModule
],
  providers: [
    BrandService
  ]
})
export class HomeModule { }
