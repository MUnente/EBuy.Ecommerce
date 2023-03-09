import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/interface/IProduct';
import { HttpBuilder } from '../utils/httpBuilder';
import { IParam } from '../models/interface/IParam';

@Injectable()
export class ProductService {
  private httpBuilder: HttpBuilder;
  protected UrlService: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.httpBuilder = new HttpBuilder(this.UrlService, '/products');
  }

  public getProducts(params: IParam[]): Observable<IProduct[]> {
    this.httpBuilder.appendParams(params);
    const urlRequest = this.httpBuilder.buildRoute();
    this.httpBuilder.destroy();

    return this.http.get<IProduct[]>(urlRequest);
  }

  public getProduct(id: string): Observable<IProduct> {
    const urlRequest = this.httpBuilder.buildRoute() + '/' + id;
    this.httpBuilder.destroy();

    return this.http.get<IProduct>(urlRequest);
  }
}
