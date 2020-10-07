import { ILoginDetails, IUserDetailsDTO } from './../../mock/DTOS/user';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  localURL = environment.url;
  authUser = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.localURL + 'users').pipe(
      map((res) => res),
      catchError(this.handleError) // then handle the error
    );
  }

  addUser(user: IUserDetailsDTO): Observable<any> {
    return this.http
      .post<any>(this.localURL + 'registration', user, {
        observe: 'response',
      })
      .pipe(
        tap((res) => console.log(res, 'res')),
        catchError(this.handleError)
      );
  }

  login(user: ILoginDetails): Observable<any> {
    return this.http
      .post<any>(this.localURL + 'login', user, {
        observe: 'response',
      })
      .pipe(
        tap((res) => this.authUser.next(res.body)),
        catchError(this.handleError)
      );
  }

  deleteUser(userName: any) {
    return this.http
      .delete<any>(this.localURL + 'user/' + userName, {
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
