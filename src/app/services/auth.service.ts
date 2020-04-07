import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  public get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public getToken(): string {
    return this.cookie.get('user');
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}login`, { email, password }).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  public registration(name: string, surname: string, email: string, phone: number, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}register`, { name, surname, email, phone, password });
  }

  public logout(): void {
    this.loggedIn.next(false);
  }
}
