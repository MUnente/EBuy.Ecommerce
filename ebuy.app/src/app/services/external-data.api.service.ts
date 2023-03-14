import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ExternalDataApiService {
  constructor(private http: HttpClient) { }

  public getFederatedStatesIBGE(): Observable<any> {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  }

  public getAddressViaCEP(value: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${value}/json/`)
  }
}
