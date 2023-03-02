import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home.component';
import { NavigationModule } from '../../components/navigation/navigation.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
