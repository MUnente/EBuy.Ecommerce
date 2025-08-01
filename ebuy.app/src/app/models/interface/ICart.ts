import { IProductCart } from "./IProductCart";

export interface ICart {
    products: IProductCart[];
    totalPrice: number;
}