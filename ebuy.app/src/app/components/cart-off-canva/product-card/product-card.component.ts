import { Component, Input } from '@angular/core';
import { IProductCart } from 'src/app/models/interface/IProductCart';
import { OffCanvaBaseComponent } from '../base-component/offcanva-base.component';

@Component({
  selector: 'product-card',
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
