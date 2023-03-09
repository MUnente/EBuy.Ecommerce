import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/interface/IProduct';
import { ProductService } from 'src/app/services/product.api.service';
import { IParam } from 'src/app/models/interface/IParam';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor (private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  public products!: IProduct[];

  ngOnInit(): void {
    let params: IParam[] = [];

    this.activatedRoute.snapshot.queryParamMap.keys.forEach(key => {
      params.push({ key, value: this.activatedRoute.snapshot.queryParamMap.get(key) ?? '' });
    });

    this.productService.getProducts(params).subscribe({
      next: data => this.products = data,
      error: error => console.error(error)
    });
  };
}
