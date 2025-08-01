import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProductCart } from 'src/app/models/interface/IProductCart';
import { OffCanvaBaseComponent } from '../base-component/offcanva-base.component';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent extends OffCanvaBaseComponent {
  @Input()
  public productInCart!: IProductCart;

  constructor() {
    super();
  }
}
