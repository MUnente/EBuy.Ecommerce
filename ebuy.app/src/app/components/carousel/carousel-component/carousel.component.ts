import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IImageCarousel } from 'src/app/models/interface/IImageCarousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input()
  images!: IImageCarousel[];
}
