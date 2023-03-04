import { Component, Input } from '@angular/core';

import { Image } from 'src/app/models/image-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input()
  images!: Image[];
}
