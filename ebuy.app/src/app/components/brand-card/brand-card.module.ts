import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCardComponent } from './brand-card-component/brand-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    RouterModule
  ],
  // ...standalone: removido exports...
})
export class BrandCardModule { }
