import { Category } from "./category";
import { Marca } from "./marca";
import { ProductImage } from "./product-image";

export interface Product {
    id: number;
    nome: string;
    descricao: string;
    marca: Marca,
    valor: number,
    imagens: ProductImage[];
    categories: Category[];
}