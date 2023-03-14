import { Injectable } from '@angular/core';
import { IAddress } from '../models/interface/IAddress';

@Injectable()
export class UserApiService {

  constructor() { }

  getUserAddress(): IAddress[] {
    // static address
    const address: IAddress[] = [
      {
        id: 1,
        zipcode: '13360-041',
        address1: 'Rua Francisco França',
        address2: '',
        number: 99,
        district: 'Jd. Leopoldo',
        city: {
          id: 3534401,
          name: 'Osasco',
          uf: {
            id: 35,
            name: 'São Paulo',
            initials: 'SP'
          }
        }
      },
      {
        id: 2,
        zipcode: '13360-041',
        address1: 'Rua Oswaldo Cruz',
        address2: '',
        number: 157,
        district: 'Centro',
        city: {
          id: 3510401,
          name: 'Capivari',
          uf: {
            id: 35,
            name: 'São Paulo',
            initials: 'SP'
          }
        }
      }
    ]
    return address;
  }
}
