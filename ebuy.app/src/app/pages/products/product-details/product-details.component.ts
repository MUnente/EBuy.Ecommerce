import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  public product!: Product;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProduct(params['id'].toString()).subscribe({
        next: data => this.product = data,
        error: error => console.error(error)
      });
    });
  };
}
