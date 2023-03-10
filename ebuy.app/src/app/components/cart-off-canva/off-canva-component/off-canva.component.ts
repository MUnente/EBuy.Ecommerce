import { Component, Input } from '@angular/core';
import { ICart } from 'src/app/models/interface/ICart';
import { OffCanvaBaseComponent } from '../base-component/offcanva-base.component';

@Component({
  selector: 'cart-offcanva',
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
