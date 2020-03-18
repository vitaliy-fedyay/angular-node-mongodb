import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('admin');
  }

  login(email: string, password: string) {
    return this.http.post<Admin>(`${environment.apiUrl}/admin-auth`, { email, password })
      .pipe(
        map(user => {
          console.log(user)
          if (user) {
            localStorage.setItem('admin', JSON.stringify(user));
          }
          return user;
        }));
  }

  logout() {
    localStorage.removeItem('admin');
  }
}

