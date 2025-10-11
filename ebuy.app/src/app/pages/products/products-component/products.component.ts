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
    PaginationComponent,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor (private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  public products: IProduct[] = [];
  public displayedProducts: IProduct[] = [];
  public page = 1;
  public readonly defaultPageSize = 12;
  public pageSize = this.defaultPageSize;
  public totalItems = 0;

  ngOnInit(): void {
    const params: IParam[] = [];

    this.activatedRoute.snapshot.queryParamMap.keys.forEach(key => {
      params.push({ key, value: this.activatedRoute.snapshot.queryParamMap.get(key) ?? '' });
    });

    this.productService.getProducts(params).subscribe({
      next: data => {
        this.products = data ?? [];
        this.totalItems = this.products.length;
        this.page = 1;
        this.updateDisplayedProducts();
      },
      error: error => console.error(error),
    });
  }

  onPageChange(nextPage: number): void {
    this.page = nextPage;
    this.updateDisplayedProducts();
  }

  onPageSizeChange(nextSize: number): void {
    if (nextSize === this.pageSize) {
      return;
    }

    this.pageSize = nextSize;
    this.page = 1;
    this.updateDisplayedProducts();
  }

  private updateDisplayedProducts(): void {
    if (!this.products.length) {
      this.displayedProducts = [];
      this.totalItems = 0;
      return;
    }

    this.totalItems = this.products.length;
    const totalPages = Math.max(Math.ceil(this.totalItems / this.pageSize), 1);

    if (this.page > totalPages) {
      this.page = totalPages;
    }

    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }
}
