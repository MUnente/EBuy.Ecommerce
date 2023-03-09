import { Component, Input } from '@angular/core';

import { IImageCarousel } from 'src/app/models/interface/IImageCarousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input()
  images!: IImageCarousel[];
}
