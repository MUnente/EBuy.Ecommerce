import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TopMenuComponent } from './top-menu-component/top-menu.component';
import { FooterComponent } from './footer-component/footer.component';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    TopMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopMenuComponent,
    FooterComponent
  ],
  providers: [
    AuthService
  ]
})
export class NavigationModule { }
