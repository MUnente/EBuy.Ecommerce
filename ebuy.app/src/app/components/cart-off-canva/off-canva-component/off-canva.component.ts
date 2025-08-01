import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ICart } from 'src/app/models/interface/ICart';
import { OffCanvaBaseComponent } from '../base-component/offcanva-base.component';

@Component({
  selector: 'cart-offcanva',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './off-canva.component.html',
  styleUrls: ['./off-canva.component.css']
})
export class OffCanvaComponent extends OffCanvaBaseComponent {
  @Input()
  public cart!: ICart;

  constructor () {
    super();
  }
}
