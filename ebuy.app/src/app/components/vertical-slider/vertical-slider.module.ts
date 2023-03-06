import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalSliderComponent } from './vertical-slider-component/vertical-slider.component';

@NgModule({
  declarations: [
    VerticalSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VerticalSliderComponent
  ]
})
export class VerticalSliderModule { }
