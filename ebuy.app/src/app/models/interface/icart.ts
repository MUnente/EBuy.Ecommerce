import { ProductCart } from "../product-cart";

export interface ICart {
    products: ProductCart[];
    totalPrice: number;
}