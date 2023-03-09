import { IOrderStatus } from "./IOrderStatus";
import { IPaymentMethod } from "./IPaymentMethod";
import { IProductCart } from "./IProductCart";

export interface IOrder {
    productsCart: IProductCart[];
    totalPrice: number;
    paymentMethod: IPaymentMethod;
    address: string;
    orderStatus: IOrderStatus;
    IdCliente: number;
    estimatedDate: Date
}