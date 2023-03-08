import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './my-orders.component.html',
  styles: [
    `
      .card + .card { margin-top: 40px }
      .card-header-title i { font-size: 16px; padding-top: 3px; margin-right: 10px; }
    `
  ]
})
export class MyOrdersComponent { }
