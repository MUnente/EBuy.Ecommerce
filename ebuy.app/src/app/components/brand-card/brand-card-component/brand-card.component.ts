import { Component, Input } from '@angular/core';
import { IBrand } from 'src/app/models/interface/IBrand';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent {
  @Input()
  public brands!: IBrand[];
}
