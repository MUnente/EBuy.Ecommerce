import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { HttpBuilder } from '../utils/httpBuilder';
import { param } from '../models/param';

@Injectable()
export class OrderService {
  private httpBuilder: HttpBuilder;
  protected UrlService: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.httpBuilder = new HttpBuilder(this.UrlService, '/orders');
  }

  getOrders(params: param[]): Observable<Order[]> {
    this.httpBuilder.appendParams(params);
    const urlRequest = this.httpBuilder.buildRoute();
    this.httpBuilder.destroy();

    return this.http.get<Order[]>(urlRequest);
  }
}
