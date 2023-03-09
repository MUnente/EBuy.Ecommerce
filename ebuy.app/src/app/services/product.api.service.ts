import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpBuilder } from '../utils/httpBuilder';
import { param } from '../models/param';

@Injectable()
export class ProductService {
  private httpBuilder: HttpBuilder;

  constructor(private http: HttpClient) {
    this.httpBuilder = new HttpBuilder('/products');
  }

  protected UrlService: string = 'http://localhost:3000';

  getProducts(params: param[]): Observable<Product[]> {
    this.httpBuilder.appendParams(params);
    return this.http.get<Product[]>(this.UrlService + this.httpBuilder.buildRoute());
  }

  getProductsByBrand(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlService + 'products?q=' + query);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.UrlService + this.httpBuilder.buildRoute() + '/' + id);
  }
}
