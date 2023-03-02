import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu-component/top-menu.component';
import { FooterComponent } from './footer-component/footer.component';
import { RouterModule } from '@angular/router';

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
