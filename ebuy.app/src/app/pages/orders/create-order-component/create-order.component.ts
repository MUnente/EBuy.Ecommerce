import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@narik/custom-validators';
import { IFederatedState } from 'src/app/models/interface/IFederatedState';
import { ExternalDataApiService } from 'src/app/services/external-data.api.service';
import { EPaymentMethod } from 'src/app/models/enums/EPaymentMethod';
import { UserApiService } from 'src/app/services/user.api.service';
import { IAddress } from 'src/app/models/interface/IAddress';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public cart: Cart;
  public paymentForm!: FormGroup;
  public states: IFederatedState[];
  public userAddress: IAddress[]

  constructor (
    private formBuilder: FormBuilder,
    private externalData: ExternalDataApiService,
    private userService: UserApiService
  ) {
    this.cart = new Cart();
    this.states = [];
    this.userAddress = [];
    this.loadStates();
    this.loadUserAddress();
  }
  
  private loadStates(): void {
    this.externalData.getFederatedStatesIBGE().subscribe({
      next: data => {
        for (let state of data)
          this.states.push({ id: state.id, name: state.nome, initials: state.sigla })
      },
      error: error => console.error(error)
    })
  }

  private loadUserAddress(): void {
    this.userService.getUserAddress().forEach(address => {
      this.userAddress.push(address);
    });
  }

  private changeZipCode(inputCep: string): void {
    this.externalData.getAddressViaCEP(inputCep).subscribe({
      next: (data: any) => {
        this.paymentForm.patchValue({
          address1: data?.logradouro,
          address2: data?.complemento,
          district: data?.bairro,
          city: data?.localidade,
          selectState: data?.ibge.substring(0,2)
        });

        this.paymentForm.get('addressNumber')?.enable({ emitEvent: false });
        this.paymentForm.get('address2')?.enable({ emitEvent: false });
      },
      error: error => console.error(error)
    });
  }

  private disableAddressFields(): void {
    this.paymentForm.get('zipcode')?.disable({ emitEvent: false });
    this.paymentForm.get('address1')?.disable({ emitEvent: false });
    this.paymentForm.get('addressNumber')?.disable({ emitEvent: false });
    this.paymentForm.get('address2')?.disable({ emitEvent: false });
    this.paymentForm.get('district')?.disable({ emitEvent: false });
    this.paymentForm.get('city')?.disable({ emitEvent: false });
    this.paymentForm.get('selectState')?.disable({ emitEvent: false });
  }

  private clearAddressFields(): void {
    this.paymentForm.get('zipcode')?.setValue('', { emitEvent: false });
    this.paymentForm.get('address1')?.setValue('', { emitEvent: false });
    this.paymentForm.get('addressNumber')?.setValue('', { emitEvent: false });
    this.paymentForm.get('address2')?.setValue('', { emitEvent: false });
    this.paymentForm.get('district')?.setValue('', { emitEvent: false });
    this.paymentForm.get('city')?.setValue('', { emitEvent: false });
    this.paymentForm.get('selectState')?.setValue('select', { emitEvent: false });
  }
  
  private changeAddress(value: string): void {
    this.clearAddressFields();
    this.disableAddressFields();

    if (!['new', 'select'].includes(value)) {
      const address = this.userAddress.find((item: IAddress) => item.id === parseInt(value));

      this.disableAddressFields();

      this.paymentForm.get('zipcode')?.setValue(address?.zipcode, { emitEvent: false });
      this.paymentForm.get('address1')?.setValue(address?.address1, { emitEvent: false });
      this.paymentForm.get('addressNumber')?.setValue(address?.number, { emitEvent: false });
      this.paymentForm.get('address2')?.setValue(address?.address2, { emitEvent: false });
      this.paymentForm.get('district')?.setValue(address?.district, { emitEvent: false });
      this.paymentForm.get('city')?.setValue(address?.city.name, { emitEvent: false });
      this.paymentForm.get('selectState')?.setValue(address?.city.uf.id, { emitEvent: false });
    }
    else if (value === 'new') {
      this.paymentForm.get('zipcode')?.enable({ emitEvent: false });
    }
  }

  public buildAddressString(address: IAddress): string {
    let stringAddress = `${address.address1} ${address.number}, `;

    if (address.address2) stringAddress += `${address.address2}, `;

    stringAddress += `${address.district}, ${address.zipcode} ${address.city.name}-${address.city.uf.initials}`;

    return stringAddress;
  }

  private changePaymentInfoFormValidators(value: number): void {
    if (value == EPaymentMethod.Pix) {
      this.paymentForm.get('cardNumber')?.setValue('');
      this.paymentForm.get('cardNumber')?.removeValidators(Validators.required);
      this.paymentForm.get('cardNumber')?.updateValueAndValidity();

      this.paymentForm.get('cardExpiryDate')?.setValue('');
      this.paymentForm.get('cardExpiryDate')?.removeValidators(Validators.required);
      this.paymentForm.get('cardExpiryDate')?.updateValueAndValidity();

      this.paymentForm.get('cvv')?.setValue('');
      this.paymentForm.get('cvv')?.removeValidators(Validators.required);
      this.paymentForm.get('cvv')?.updateValueAndValidity();

      this.paymentForm.get('cpf')?.setValue('');
      this.paymentForm.get('cpf')?.removeValidators(Validators.required);
      this.paymentForm.get('cpf')?.updateValueAndValidity();

      this.paymentForm.get('installments')?.setValue('');
      this.paymentForm.get('installments')?.removeValidators(Validators.required);
      this.paymentForm.get('installments')?.updateValueAndValidity();
    }
    else if (value == EPaymentMethod.Boleto) {
      this.paymentForm.get('cardNumber')?.setValue('');
      this.paymentForm.get('cardNumber')?.removeValidators(Validators.required);
      this.paymentForm.get('cardNumber')?.updateValueAndValidity();
      
      this.paymentForm.get('cardExpiryDate')?.setValue('');
      this.paymentForm.get('cardExpiryDate')?.removeValidators(Validators.required);
      this.paymentForm.get('cardExpiryDate')?.updateValueAndValidity();

      this.paymentForm.get('cvv')?.setValue('');
      this.paymentForm.get('cvv')?.removeValidators(Validators.required);
      this.paymentForm.get('cvv')?.updateValueAndValidity();

      this.paymentForm.get('cpf')?.setValue('');
      this.paymentForm.get('cpf')?.addValidators(Validators.required);
      this.paymentForm.get('cpf')?.updateValueAndValidity();

      this.paymentForm.get('installments')?.setValue('');
      this.paymentForm.get('installments')?.addValidators(Validators.required);
      this.paymentForm.get('installments')?.updateValueAndValidity();
    }
    else {
      this.paymentForm.get('cardNumber')?.setValue('');
      this.paymentForm.get('cardNumber')?.addValidators(Validators.required);
      this.paymentForm.get('cardNumber')?.updateValueAndValidity();
      
      this.paymentForm.get('cardExpiryDate')?.setValue('');
      this.paymentForm.get('cardExpiryDate')?.addValidators(Validators.required);
      this.paymentForm.get('cardExpiryDate')?.updateValueAndValidity();

      this.paymentForm.get('cvv')?.setValue('');
      this.paymentForm.get('cvv')?.addValidators(Validators.required);
      this.paymentForm.get('cvv')?.updateValueAndValidity();

      this.paymentForm.get('cpf')?.setValue('');
      this.paymentForm.get('cpf')?.addValidators(Validators.required);
      this.paymentForm.get('cpf')?.updateValueAndValidity();

      this.paymentForm.get('installments')?.setValue('');
      this.paymentForm.get('installments')?.addValidators(Validators.required);
      this.paymentForm.get('installments')?.updateValueAndValidity();
    }
  }
  
  public submitPayment(): void {
    console.log(this.paymentForm.get('installments'))
  }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      // Address info
      selectAddress: ['select', [CustomValidators.notIncludedIn(['new', 'select'])]],
      zipcode: [{ value: '', disabled: true }, { validators: [Validators.required], updateOn: 'blur', }],
      address1: [{ value: '', disabled: true }, { validators: [Validators.required] }],
      addressNumber: [{ value: '', disabled: true }, { validators: [Validators.required] }],
      address2: [{ value: '', disabled: true }],
      district: [{ value:'', disabled: true}, { validators: [Validators.required] }],
      city: [{ value: '', disabled: true }, { validators: [Validators.required] }],
      selectState: [{ value: 'select', disabled: true }, { validators: [CustomValidators.notEqual('select')] }],
      
      // Payment info
      selectPaymentMethod: ['1'],
      cardNumber: ['', { validators: [Validators.required, Validators.pattern('\d{4}\ \d{4}\ \d{4}\ \d{4}')]}],
      cardExpiryDate: ['', { validators: [Validators.required]}],
      cvv: ['', { validators: [Validators.required, Validators.max(999)]}],
      cpf: ['', { validators: [Validators.required, Validators.pattern('^\d{3}\.\d{3}\.\d{3}\-\d{2}')]}],
      installments: ['', { validators: [Validators.required, Validators.min(1)]}],
    });

    this.paymentForm.get('selectAddress')?.valueChanges.subscribe((value) => {
      this.changeAddress(value);
    });

    this.paymentForm.get('zipcode')?.valueChanges.subscribe((value) => {
      this.changeZipCode(value);
    });

    this.paymentForm.get('selectPaymentMethod')?.valueChanges.subscribe((value) => {
      this.changePaymentInfoFormValidators(parseInt(value));
    });
  }
}
