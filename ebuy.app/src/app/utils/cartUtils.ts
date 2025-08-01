import { Cart } from "../models/cart";
import { ICart } from "../models/interface/ICart";

export class CartUtils {
  private static cartStructure: ICart = { products: [], totalPrice: 0 };

  static set(cart: Cart): void {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  static list(): ICart {
    return JSON.parse(sessionStorage.getItem('cart') || JSON.stringify(this.cartStructure));
  }
}
