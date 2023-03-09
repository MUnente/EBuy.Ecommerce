import { IProductCart } from "../interface/IProductCart";

export interface ICart {
    products: IProductCart[];
    totalPrice: number;
}