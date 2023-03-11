import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@narik/custom-validators';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public cart: Cart;
  public paymentForm!: FormGroup;

  constructor (
    private formBuilder: FormBuilder
  ) {
    this.cart = new Cart();
  }

  public submitPayment() {
    console.log(this.paymentForm.get('installments'))
  }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      installments: ['']
    });
  }
}
