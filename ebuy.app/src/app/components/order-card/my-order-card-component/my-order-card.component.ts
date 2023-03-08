import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { EPaymentMethod } from 'src/app/models/enums/epaymentMethod';

@Component({
  selector: 'app-order-card',
  templateUrl: './my-order-card.component.html',
  styles: [
    `
      .card + .card { margin-top: 40px }
      .card-header-title i { font-size: 16px; padding-top: 3px; margin-right: 10px; }
    `
  ]
})
export class OrderCardComponent {
  @Input()
  public orders!: Order[];

  public getPaymentMethodIconClass(paymentMethodId: number): string {
    switch (paymentMethodId) {
      case EPaymentMethod.Boleto:
        return 'fa-solid fa-barcode';
      case EPaymentMethod.CartaoCredito:
        return 'fa-solid fa-credit-card';
      case EPaymentMethod.Pix:
        return 'fa-brands fa-pix';
      default:
        return 'fa-solid fa-circle-exclamation';
    }
  }
}
