import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public login(): void {
    if (!sessionStorage.getItem('token'))
      sessionStorage.setItem('token', 'logged');
  }

  public logout(): void {
    if (sessionStorage.getItem('token'))
      sessionStorage.removeItem('token');
  }

  public isLogged(): boolean {
    return sessionStorage.getItem('token') ? true : false
  }
}
