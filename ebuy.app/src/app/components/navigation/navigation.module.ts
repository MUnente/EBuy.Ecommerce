import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // ...standalone: removido exports...
  providers: [
    AuthService
  ]
})
export class NavigationModule { }
