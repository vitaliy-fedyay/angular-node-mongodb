import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) { }

  public getToken(): string {
    return this.cookie.get('admin');
  }

  public login(email: string, password: string): any {
    return this.http.post<Admin>(`${environment.apiUrl}/admin-auth`, { email, password })
      .subscribe((data) => {
        if (data) {
          this.cookie.set('admin', JSON.stringify(data.token));
          this.router.navigateByUrl('admin/dashboard');
        }
      });
  }

  public logout(): void {
    this.cookie.delete('admin');
  }
}

