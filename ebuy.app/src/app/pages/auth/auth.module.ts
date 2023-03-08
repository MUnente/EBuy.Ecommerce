import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TermsModalModule } from 'src/app/components/terms-modal/terms-modal.module';

import { LoginComponent } from './login-component/login.component';
import { RegisterComponent } from './register-component/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    TermsModalModule,
    SharedModule
  ]
})
export class AuthModule { }
