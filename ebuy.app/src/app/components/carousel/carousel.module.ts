import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel-component/carousel.component';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule
  ],
  // ...standalone: removido exports...
})
export class CarouselModule { }
