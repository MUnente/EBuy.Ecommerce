import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from '../../components/navigation/navigation.module';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';

import { HomeComponent } from './home-component/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigationModule,
    CarouselModule
  ]
})
export class HomeModule { }
