import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor (private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  public products!: Product[];

  ngOnInit(): void {
    const query = this.activatedRoute.snapshot.queryParamMap.get('q');

    this.productService.getProducts(query).subscribe({
      next: data => this.products = data,
      error: error => console.error(error)
    });
  };
}
