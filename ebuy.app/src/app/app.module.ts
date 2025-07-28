import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';

registerLocaleData(localePt);

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  // ...existing code...
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
