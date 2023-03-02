import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCenterComponent } from './logo-center/logo-center.component';

@NgModule({
  declarations: [
    LogoCenterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoCenterComponent
  ]
})
export class SharedModule { }
