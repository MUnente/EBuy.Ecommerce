import { ICategory } from "./ICategory";
import { IBrand } from "./IBrand";
import { IProductImage } from "./IProductImage";

export interface IProduct {
    id: number;
    nome: string;
    descricao: string;
    marca: IBrand,
    valor: number,
    imagens: IProductImage[];
    categories: ICategory[];
}