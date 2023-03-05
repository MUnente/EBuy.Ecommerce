import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsModalComponent } from './terms-modal-component/terms-modal.component';

@NgModule({
  declarations: [
    TermsModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TermsModalComponent
  ]
})
export class TermsModalModule { }
