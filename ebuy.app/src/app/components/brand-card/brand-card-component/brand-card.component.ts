import { Component, Input } from '@angular/core';
import { Marca } from 'src/app/models/marca';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent {
  @Input()
  public brands: any[] = [ {}, {}, {}, {}, {}, {}, ];
}
