import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
