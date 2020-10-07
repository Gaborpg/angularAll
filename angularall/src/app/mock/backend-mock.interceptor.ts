import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { ILoginDetails, UserDetails } from './DTOS/user';
import { delay, map, tap } from 'rxjs/operators';
import { LoginComponent } from '../auth/pages/login/login.component';

export const usersData: UserDetails[] = [
  new UserDetails({
    name: 'Gaborpg',
    placeOfBirth: 'Budapest',
    postcode: 'E14 8AL',
    city: 'London',
    mobileNumber: '+36209495252',
    email: 'gaborpg@gmail.com',
    password: 'password',
  }),
];

let id = 0;

@Injectable()
export class BackendMockInterceptor implements HttpInterceptor {
  private _userJsonPath = JSON.stringify(usersData);

  constructor(private http: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const resp = this.handleRequests(req, next);
    return resp;
  }

  handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = req;

    switch (true) {
      case url.endsWith('/users') && method === 'GET':
        return of(new HttpResponse({ status: 200, body: this._userJsonPath }));
      case url.endsWith('/login') && method === 'POST': {
        const { body } = req.clone();
        if (this.login(body)) {
          return of(new HttpResponse({ status: 200, body: true })).pipe(
            delay(500)
          );
        } else {
          return throwError({ error: 'Try again!' });
        }
      }
      case url.endsWith('/registration') && method === 'POST': {
        const { body } = req.clone();
        return of(new HttpResponse({ status: 200, body })).pipe(
          tap((res) => {
            usersData.push(
              new UserDetails({
                name: res.body.name,
                placeOfBirth: res.body.placeOfBirth,
                postcode: res.body.postcode,
                city: res.body.city,
                mobileNumber: res.body.mobileNumber,
                email: res.body.email,
                password: res.body.password,
              })
            );
          }),
          delay(500)
        );
      }
      default:
        // pass through any requests not handled above
        return next.handle(req);
    }
  }

  getUserName(url: any) {
    const urlValues = url.split('/');
    return urlValues[urlValues.length - 1];
  }

  login(login: ILoginDetails): boolean {
    if (
      usersData.find((name) => name.name === login.user)?.password ===
      login.password
    ) {
      return true;
    }
    return false;
  }
}
