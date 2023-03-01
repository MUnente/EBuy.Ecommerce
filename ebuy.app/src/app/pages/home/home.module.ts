import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home.component';
import { NavigationModule } from '../../components/navigation/navigation.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
