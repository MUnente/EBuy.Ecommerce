import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AppRoutingModule, BrowserModule],
})
export class AppComponent {
  title = 'ebuy.app';
}
