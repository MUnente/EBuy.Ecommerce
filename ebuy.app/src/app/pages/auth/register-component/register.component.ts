import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '@narik/custom-validators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  registerForm!: FormGroup;

  wasFieldTouchedOrIsDirty(fieldName: string): boolean {
    return (this.registerForm.get(fieldName)?.dirty || this.registerForm.get(fieldName)?.touched) ?? false;
  }

  isFieldFilled(fieldName: string): boolean {
    return (this.registerForm.get(fieldName)?.errors?.['required'] && this.wasFieldTouchedOrIsDirty(fieldName)) ?? false;
  }

  isValidField(fieldName: string): boolean {
    return (this.registerForm.get(fieldName)?.errors && this.wasFieldTouchedOrIsDirty(fieldName)) ?? false;
  }

  isValidEmailField(fieldName: string): boolean {
    return (this.registerForm.get(fieldName)?.errors?.['email'] && this.wasFieldTouchedOrIsDirty(fieldName)) ?? false;
  }

  isPasswordValid(fieldName: string): boolean {
    return (this.registerForm.get(fieldName)?.errors?.['rangeLength']) ?? false;
  }

  isConfirmPasswordValid(fieldName: string): boolean {
    return (this.registerForm.get(fieldName)?.errors?.['equalTo']) ?? false;
  }

  registerUser(): void {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.authService.login();
      this.router.navigate(['/home']);
    }
    else {
      alert('Não foi possível submeter o formulário. Tente novamente em breve.')
    }
  }

  ngOnInit(): void {
    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let confirmPassword = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password)]);

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password,
      confirmPassword,
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
}
