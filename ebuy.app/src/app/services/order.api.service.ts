import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../models/interface/IOrder';
import { HttpBuilder } from '../utils/httpBuilder';
import { IParam } from '../models/interface/IParam';

@Injectable()
export class OrderService {
  private httpBuilder: HttpBuilder;
  protected UrlService: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.httpBuilder = new HttpBuilder(this.UrlService, '/orders');
  }

  getOrders(params: IParam[]): Observable<IOrder[]> {
    this.httpBuilder.appendParams(params);
    const urlRequest = this.httpBuilder.buildRoute();
    this.httpBuilder.destroy();

    return this.http.get<IOrder[]>(urlRequest);
  }
}
