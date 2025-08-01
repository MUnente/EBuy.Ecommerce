import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent implements OnInit {
  constructor (
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) { }
  public formSearch!: FormGroup;
  public isLogged: boolean = false;

  search(): void {
    if (this.formSearch.dirty && this.formSearch.valid) {
      this.router.navigateByUrl(`/products?q=${this.formSearch.get('query')?.value}`);
    }
  }

  logout(): void {
    this.authService.logout();
    window.location.href = window.location.origin;
  }

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      query: ['', Validators.required]
    });

    if (sessionStorage.getItem('token'))
      this.isLogged = true;
  }
}
