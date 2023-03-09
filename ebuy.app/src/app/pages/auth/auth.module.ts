import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { TermsModalModule } from 'src/app/components/terms-modal/terms-modal.module';

import { LoginComponent } from './login-component/login.component';
import { RegisterComponent } from './register-component/register.component';

import { AuthService } from 'src/app/services/auth.service';
import { LogoCenterComponent } from './components/logo-center/logo-center.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoCenterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    TermsModalModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
