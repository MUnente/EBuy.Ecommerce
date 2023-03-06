import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(private elementRef: ElementRef) {}
  
  changeImg(image: any): void {
    this.elementRef.nativeElement.querySelector('.img-expand > img').src = image.getAttribute('src');
  }
}
