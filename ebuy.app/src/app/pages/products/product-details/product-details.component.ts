import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
  public product: Product = {
    id: 1,
    nome: 'Samsung Galaxy S22 Ultra Black',
    descricao: 'O Smartphone possuí uma capacidade de armazenamento de 256GB, Dual Chip com tecnologia 5G, processador Octa-Core Snapdragon 8 Gen 1 uma memória RAM de 12GB, permitindo o dispositivo funcionar da melhor maneira possível.',
    valor: 4299.99,
    marca: { id: 1, nome: 'Samsung' },
    categories: [
      { id: 1, nome: 'Eletrônico' }
    ],
    imagens: [
      { id: null, dir: '../../../../assets/products/s22ultra_black/s22ultra-black-main.webp' },
      { id: null, dir: '../../../../assets/products/s22ultra_black/s22ultra_black-facing.webp' },
      { id: null, dir: '../../../../assets/products/s22ultra_black/s22ultra_black-onlyPhone.webp' },
      { id: null, dir: '../../../../assets/products/s22ultra_black/s22ultra_black-backwards.webp' },
      { id: null, dir: '../../../../assets/products/s22ultra_black/s22ultra-green.webp' },
    ]
  };
}
