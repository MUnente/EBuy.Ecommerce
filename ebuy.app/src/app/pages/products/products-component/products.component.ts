import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.api.service';
import { param } from 'src/app/models/param';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor (private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  public products!: Product[];

  ngOnInit(): void {
    debugger;
    let params: param[] = [];

    this.activatedRoute.snapshot.queryParamMap.keys.forEach(key => {
      params.push({ key, value: this.activatedRoute.snapshot.queryParamMap.get(key) ?? '' });
    });

    this.productService.getProducts(params).subscribe({
      next: data => this.products = data,
      error: error => console.error(error)
    });
  };
}
