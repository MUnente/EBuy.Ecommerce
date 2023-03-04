import { Component } from '@angular/core';
import { Image } from 'src/app/models/image-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  images: Image[] = [
    { 
      url: '../../../assets/online-shopping_banner-1600x500.jpg',
      interval: 10000,
      alt: 'Uma imagem com a cor de fundo amaréla com algumas figuras de celular remetendo a compras online.',
      active: true
    },
    { 
      url: '../../../assets/discount-50-percent_banner-1600x500.jpg',
      interval: 2000,
      alt: 'Imagem com a cor de fundo vermelha dizendo que estamos com 50% de desconto nos nossos produtos.',
      active: false
    },
    { 
      url: '../../../assets/cashback_banner-1600x500.jpg',
      interval: 0,
      alt: 'Imagem com a cor de fundo azul com alguém segurando um celular dizendo que temos cashback em nossas vendas.',
      active: false
    }
  ];
}
