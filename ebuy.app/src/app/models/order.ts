import { OrderStatus } from "./orderStatus";
import { PaymentMethod } from "./paymentMethod";
import { ProductCart } from "./product-cart";

export interface Order {
    productsCart: ProductCart[];
    totalPrice: number;
    paymentMethod: PaymentMethod;
    address: string;
    orderStatus: OrderStatus;
    IdCliente: number;
    estimatedDate: Date
}