import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from '../models/interface/IBrand';
import { HttpBuilder } from '../utils/httpBuilder';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private httpBuilder: HttpBuilder;
  protected UrlService: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.httpBuilder = new HttpBuilder(this.UrlService, '/brands');
  }

  getBrands(): Observable<IBrand[]> {
    const urlRequest = this.httpBuilder.buildRoute();
    this.httpBuilder.destroy();

    return this.http.get<IBrand[]>(urlRequest);
  }
}
