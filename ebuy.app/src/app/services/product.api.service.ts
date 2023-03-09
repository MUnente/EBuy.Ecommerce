import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpBuilder } from '../utils/httpBuilder';
import { param } from '../models/param';

@Injectable()
export class ProductService {
  private httpBuilder: HttpBuilder;
  protected UrlService: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.httpBuilder = new HttpBuilder(this.UrlService, '/products');
  }

  public getProducts(params: param[]): Observable<Product[]> {
    this.httpBuilder.appendParams(params);
    const urlRequest = this.httpBuilder.buildRoute();
    this.httpBuilder.destroy();

    return this.http.get<Product[]>(urlRequest);
  }

  public getProduct(id: string): Observable<Product> {
    const urlRequest = this.httpBuilder.buildRoute() + '/' + id;
    this.httpBuilder.destroy();

    return this.http.get<Product>(urlRequest);
  }
}
