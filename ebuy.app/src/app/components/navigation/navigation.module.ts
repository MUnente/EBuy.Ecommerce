import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './top-menu-component/top-menu.component';
import { FooterComponent } from './footer-component/footer.component';

@NgModule({
  declarations: [
    TopMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopMenuComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
