import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from 'src/app/components/navigation/top-menu-component/top-menu.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card-component/product-card.component';
import { FooterComponent } from 'src/app/components/navigation/footer-component/footer.component';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/interface/IProduct';
import { ProductService } from 'src/app/services/product.api.service';
import { IParam } from 'src/app/models/interface/IParam';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    TopMenuComponent,
    ProductCardComponent,
    FooterComponent
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor (private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  public products!: IProduct[];

  ngOnInit(): void {
    let params: IParam[] = [];

    this.activatedRoute.snapshot.queryParamMap.keys.forEach(key => {
      params.push({ key, value: this.activatedRoute.snapshot.queryParamMap.get(key) ?? '' });
    });

    this.productService.getProducts(params).subscribe({
      next: data => this.products = data,
      error: error => console.error(error)
    });
  };
}
