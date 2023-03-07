import { Injectable } from '@angular/core';

import { ProductCart } from "../models/product-cart";
import { Product } from "../models/product";

@Injectable()
export class CartService {
  constructor() { }

  public insertProductInCart(product: Product, quantity: number): void {
    let cart: ProductCart[] = JSON.parse(sessionStorage.getItem('cart') || '[]');
    const productInCart: ProductCart | undefined = cart?.find(item => item.product.id === product.id);
    
    if (productInCart) {
      productInCart.quantity += quantity;
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
      cart.push({ product, quantity });
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  public updateCart(productIndex: number, quantity: number): void {
    let cart: ProductCart[] = JSON.parse(sessionStorage.getItem('cart') || '[]');
    cart[productIndex].quantity = quantity;
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  public deleteProductInCart(index: number): void {
    let cart: ProductCart[] = JSON.parse(sessionStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  public listCart(): ProductCart[] {
    return JSON.parse(sessionStorage.getItem('cart') || '[]');
  }
}
