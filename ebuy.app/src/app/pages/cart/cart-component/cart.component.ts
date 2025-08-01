import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from 'src/app/components/navigation/top-menu-component/top-menu.component';
import { FooterComponent } from 'src/app/components/navigation/footer-component/footer.component';
import { IProduct } from 'src/app/models/interface/IProduct';
import { Cart } from 'src/app/models/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    TopMenuComponent,
    FooterComponent
  ],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  constructor (private router: Router) { }

  public cart!: Cart;

  getProductCategories(product: IProduct): string {
    return product.categories.map(item => item.nome).join(', ');
  }

  deleteProduct(event: any): void {
    const productCartIndex: number = parseInt(event.currentTarget.getAttribute('productcartindex'));

    if (productCartIndex >= 0) {
      const dialogResult: boolean = confirm('Você tem certeza que deseja remover esse produto?');
  
      if (dialogResult) {
        this.cart.deleteProductInCart(productCartIndex);
      }
    }
  }

  updateQuantity(event: any): void {
    this.cart.updateCart(parseInt(event.currentTarget.getAttribute('productcartindex')), parseInt(event.currentTarget.value));
  }

  createOrder(): void {
    if (this.cart.products.length > 0)
      this.router.navigate(['/orders/create-order']);
  }

  ngOnInit(): void {
    this.cart = new Cart();
  }
}
