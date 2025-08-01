import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { IProductImage } from 'src/app/models/interface/IProductImage';
import { tns } from 'tiny-slider';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vertical-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.css']
})
export class VerticalSliderComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  @Input()
  images: IProductImage[] | undefined;
  
  changeImg(image: any): void {
    this.elementRef.nativeElement.querySelector('.img-expand > img').src = image.getAttribute('src');
  }

  ngAfterViewInit(): void {
    tns({
      container: '.product-image-list',
      items: 4,
      axis: 'vertical',
      swipeAngle: true,
      speed: 400,
      loop: false,
      nav: false,
      prevButton: '.fa-arrow-up.button-arrow',
      nextButton: '.fa-arrow-down.button-arrow',
    });
  }
}
