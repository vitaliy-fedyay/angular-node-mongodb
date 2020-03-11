import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/login`, { email, password });
  }

  public registration(name: string, surname: string, email: string, phone: number, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/register`, { name, surname, email, phone, password });
  }
}
