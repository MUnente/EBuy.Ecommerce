import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable()
export class OrderGuard {
  private cart: Cart;

  constructor (private router: Router) {
    this.cart = new Cart();
  }

  public canActivate(): 
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      return this.cart.products.length > 0;
    }
    
  public canMatch():
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      return this.cart.products.length > 0;
    }
}
