import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  
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
