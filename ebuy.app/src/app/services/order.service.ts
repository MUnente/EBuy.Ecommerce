import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) { }

  protected UrlService: string = 'http://localhost:3000/';

  getOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.UrlService + 'orders?q=' + userId);
  }
}
