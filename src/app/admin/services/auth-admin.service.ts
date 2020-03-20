import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private currentUserSubject: BehaviorSubject<Admin>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {
    this.currentUserSubject = new BehaviorSubject<Admin>(
      this.cookie.check('admin') ? JSON.parse(this.cookie.get('admin')) : null);
  }

  public get currentUserValue(): Admin {
    return this.currentUserSubject.value;
  }

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
    this.currentUserSubject.next(null);
  }

}

