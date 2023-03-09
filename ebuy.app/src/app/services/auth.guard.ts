import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {
  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  public canActivate(): 
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      return this.checkUserIsLogged();
    }

  public canMatch():
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      return this.checkUserIsLogged();
    }

  private checkUserIsLogged(): boolean {
    if (!this.authService.isLogged()) {
      alert('Por favor, faça o Login!');
      this.router.navigate(['/auth']);
      
      return false;
    }
    return true;
  }
}
