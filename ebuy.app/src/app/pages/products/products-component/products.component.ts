import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from 'src/app/components/navigation/top-menu-component/top-menu.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card-component/product-card.component';
import { FooterComponent } from 'src/app/components/navigation/footer-component/footer.component';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/interface/IProduct';
import { ProductService } from 'src/app/services/product.api.service';
import { IParam } from 'src/app/models/interface/IParam';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    TopMenuComponent,
    ProductCardComponent,
    FooterComponent,
    PaginationComponent
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor (private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  public products: IProduct[] = [];
  public paginatedProducts: IProduct[] = [];
  public readonly pageSize = 12;
  public currentPage = 1;

  ngOnInit(): void {
    const params: IParam[] = [];

    this.activatedRoute.snapshot.queryParamMap.keys.forEach(key => {
      params.push({ key, value: this.activatedRoute.snapshot.queryParamMap.get(key) ?? '' });
    });

    this.productService.getProducts(params).subscribe({
      next: data => {
        this.products = data ?? [];
        this.currentPage = 1;
        this.updatePaginatedProducts();
      },
      error: error => console.error(error)
    });
  }

  public onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  private updatePaginatedProducts(): void {
    if (!this.products.length) {
      this.currentPage = 1;
      this.paginatedProducts = [];
      return;
    }

    const totalPages = Math.ceil(this.products.length / this.pageSize);
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages;
    }

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
}
