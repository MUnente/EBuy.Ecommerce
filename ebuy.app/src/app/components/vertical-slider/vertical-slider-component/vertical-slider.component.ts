import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { ProductImage } from 'src/app/models/product-image';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.css']
})
export class VerticalSliderComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  @Input()
  images!: ProductImage[];
  
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
