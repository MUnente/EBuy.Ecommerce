import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  // ...standalone: removido declarations...
  imports: [
    CommonModule,
    RouterModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
