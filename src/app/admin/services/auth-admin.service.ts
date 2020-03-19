import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getToken(): string {
    return localStorage.getItem('admin');
  }

  public login(email: string, password: string): any {
    return this.http.post<Admin>(`${environment.apiUrl}/admin-auth`, { email, password })
      .subscribe((data) => {
        if (data) {
          localStorage.setItem('admin', JSON.stringify(data.token));
          this.router.navigateByUrl('admin/dashboard');
        }
      });
  }

  logout() {
    localStorage.removeItem('admin');
  }
}

