import { Component, OnInit } from '@angular/core';
import { IImageCarousel } from 'src/app/models/interface/IImageCarousel';
import { IBrand } from 'src/app/models/interface/IBrand';
import { BrandService } from 'src/app/services/brand.api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public brands!: IBrand[];
  public images: IImageCarousel[] = [
    {
      url: '../../../assets/online-shopping_banner-1600x500.jpg',
      interval: 5000,
      alt: 'Uma imagem com a cor de fundo amaréla com algumas figuras de celular remetendo a compras online.',
      active: true
    },
    {
      url: '../../../assets/discount-50-percent_banner-1600x500.jpg',
      interval: 5000,
      alt: 'Imagem com a cor de fundo vermelha dizendo que estamos com 50% de desconto nos nossos produtos.',
      active: false
    },
    {
      url: '../../../assets/cashback_banner-1600x500.jpg',
      interval: 5000,
      alt: 'Imagem com a cor de fundo azul com alguém segurando um celular dizendo que temos cashback em nossas vendas.',
      active: false
    }
  ];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe({
      next: data => this.brands = data,
      error: error => console.error(error)
    });
  }
}
