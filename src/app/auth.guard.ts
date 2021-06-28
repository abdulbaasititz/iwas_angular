import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private returnUrl : string | undefined;

  constructor (private router : Router){

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isLoggedIn = localStorage.getItem('isLoggedIn');
      
      this.returnUrl = state.url;

      if(isLoggedIn === 'true') {
        return true;
      }
      
      this.router.navigateByUrl(
        this.router.createUrlTree(
          ['/login'], {
            queryParams: { returnUrl: this.returnUrl}
          }
        )
      );
  
      return false;
  }
  
}
