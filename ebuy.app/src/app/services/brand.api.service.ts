import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient) { }

  protected UrlService: string = 'http://localhost:3000/';

  getOrders(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.UrlService + 'brands');
  }
}
