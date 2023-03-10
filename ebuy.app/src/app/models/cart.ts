import { IProduct } from './interface/IProduct';
import { IProductCart } from './interface/IProductCart';
import { CartUtils } from '../utils/cartUtils';
import { ICart } from './interface/ICart';

export class Cart {
    public products: IProductCart[] = [];
    public totalPrice: number = 0;

    constructor () {
        const { products, totalPrice }: ICart = this.list();
        this.products = products;
        this.totalPrice = totalPrice;
    }

    public list(): ICart {
        return CartUtils.list();
    }

    public insertProductInCart(product: IProduct, quantity: number): void {
        const productInCart: IProductCart | undefined = this.products?.find(item => item.product.id === product.id);
        
        if (productInCart)
            productInCart.quantity += quantity; // it's also modifies 'this.products[n]' by mutation
        else
            this.products.push({ product, quantity }); 

        this.totalPrice = this.calculateTotalPrice();

        CartUtils.set(this);
    }

    public updateCart(productIndex: number, quantity: number): void {
        this.products[productIndex].quantity = quantity;
        this.totalPrice = this.calculateTotalPrice();

        CartUtils.set(this);
    }

    public deleteProductInCart(index: number): void {
        this.products.splice(index, 1);
        this.totalPrice = this.calculateTotalPrice();

        CartUtils.set(this);
    }

    private calculateTotalPrice(): number {
        return this.products.length ? this.products.map(item => (item.product.valor * item.quantity)).reduce((accumulator, index) => accumulator + index) : 0;
    }
}