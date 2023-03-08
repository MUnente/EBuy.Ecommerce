import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductCart } from 'src/app/models/product-cart';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  constructor (
    private cartService: CartService
  ) { }

  public totalPrice: number = 0;
  public products!: ProductCart[];

  loadProductListAndTotalPrice(): void {
    this.products = this.cartService.listCart();
    if (this.products.length)
      this.totalPrice = this.getTotalPrice();
    else 
      this.totalPrice = 0;
  }

  getProductCategories(product: Product): string {
    return product.categories.map(item => item.nome).join(', ');
  }

  getTotalPrice(): number {
    return this.products.map(item => (item.product.valor * item.quantity)).reduce((accumulator, index) => accumulator + index);
  }

  deleteProduct(event: any): void {
    const productCartIndex: number = parseInt(event.currentTarget.getAttribute('productcartindex'));

    if (productCartIndex >= 0) {
      const dialogResult: boolean = confirm('Você tem certeza que deseja remover esse produto?');
  
      if (dialogResult) {
        this.cartService.deleteProductInCart(productCartIndex);
        this.loadProductListAndTotalPrice();
      }
    }
  }

  updateQuantity(event: any): void {
    this.cartService.updateCart(parseInt(event.currentTarget.getAttribute('productcartindex')), parseInt(event.currentTarget.value));
    this.loadProductListAndTotalPrice();
  }

  ngOnInit(): void {
    this.loadProductListAndTotalPrice();
  }
}
