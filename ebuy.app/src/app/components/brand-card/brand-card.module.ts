import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCardComponent } from './brand-card-component/brand-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BrandCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BrandCardComponent
  ]
})
export class BrandCardModule { }
