import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  protected UrlService: string = 'http://localhost:3000/';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlService + 'products');
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.UrlService + 'products/' + id);
  }
}
