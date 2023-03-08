import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@narik/custom-validators';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  loginForm!: FormGroup;

  wasFieldTouchedOrIsDirty(fieldName: string): boolean {
    return (this.loginForm.get(fieldName)?.dirty || this.loginForm.get(fieldName)?.touched) ?? false;
  }

  isFieldFilled(fieldName: string): boolean {
    return (this.loginForm.get(fieldName)?.errors?.['required'] && this.wasFieldTouchedOrIsDirty(fieldName)) ?? false;
  }

  isValidField(fieldName: string): boolean {
    return (this.loginForm.get(fieldName)?.errors && this.wasFieldTouchedOrIsDirty(fieldName)) ?? false;
  }

  isValidEmailField(fieldName: string): boolean {
    return (this.loginForm.get(fieldName)?.errors?.['email'] && this.wasFieldTouchedOrIsDirty(fieldName)) ?? false;
  }

  isPasswordValid(fieldName: string): boolean {
    return (this.loginForm.get(fieldName)?.errors?.['rangeLength']) ?? false;
  }

  isConfirmPasswordValid(fieldName: string): boolean {
    return (this.loginForm.get(fieldName)?.errors?.['equalTo']) ?? false;
  }

  login(): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      alert('nice bro');
    }
    else {
      alert('Não foi possível submeter o formulário. Tente novamente em breve.')
    }
  }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 16])]]
    });
  }
}
