import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  public getToken(): string {
    return this.cookie.get('user');
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/login`, { email, password });
  }

  public registration(name: string, surname: string, email: string, phone: number, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/register`, { name, surname, email, phone, password });
  }
}
