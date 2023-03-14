import { Component, Input } from '@angular/core';
import { IOrder } from 'src/app/models/interface/IOrder';
import { EPaymentMethod } from 'src/app/models/enums/EPaymentMethod';

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
  public orders!: IOrder[];

  public getPaymentMethodIconClass(paymentMethodId: number): string {
    switch (paymentMethodId) {
      case EPaymentMethod.Boleto:
        return 'fa-solid fa-barcode';
      case EPaymentMethod.CartaoCredito || EPaymentMethod.CartaoDebito:
        return 'fa-solid fa-credit-card';
      case EPaymentMethod.Pix:
        return 'fa-brands fa-pix';
      default:
        return 'fa-solid fa-circle-exclamation';
    }
  }
}
