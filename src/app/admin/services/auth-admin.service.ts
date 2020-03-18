import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('admin');
  }

  login(nickname: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/admin-auth`, { nickname, password })
      .pipe(map(user => {
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

