import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IBrand } from 'src/app/models/interface/IBrand';

@Component({
  selector: 'app-brand-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent {
  @Input()
  public brands!: IBrand[];
}
