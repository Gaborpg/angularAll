import { LoginService } from './../../auth/services/login.service';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(private router: Router, private authService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //TODO:Route guard!

    return true;
  }
}
