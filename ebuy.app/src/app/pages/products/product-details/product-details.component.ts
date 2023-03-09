import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.api.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute, 
    private productService: ProductService, 
  ) { }

  public product!: Product;
  public quantity: number = 1;

  private loadProductDetails(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProduct(params['id'].toString()).subscribe({
        next: data => this.product = data,
        error: error => console.error(error)
      });
    });
  }

  addProductInCart(): void {
    const cart = new Cart();
    cart.insertProductInCart(this.product, this.quantity);

    alert('Produto foi adicionado ao carrinho com sucesso.');
  }

  ngOnInit(): void {
    this.loadProductDetails();
  };
}
