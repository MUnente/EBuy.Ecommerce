import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent implements OnInit {
  constructor (private formBuilder: FormBuilder, private router: Router) { }
  public formSearch!: FormGroup;

  search(): void {
    if (this.formSearch.dirty && this.formSearch.valid) {
      this.router.navigateByUrl(`/products?q=${this.formSearch.get('query')?.value}`);
    }
  }

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      query: ['', Validators.required]
    });
  }
}
