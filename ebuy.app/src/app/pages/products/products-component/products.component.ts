import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor (private productService: ProductService) { }

  public products!: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: data => this.products = data,
      error: error => console.error(error)
    });
  };
}
