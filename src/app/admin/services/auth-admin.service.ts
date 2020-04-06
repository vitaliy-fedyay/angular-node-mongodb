import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private currentTokenSubject: BehaviorSubject<Admin>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {
    this.currentTokenSubject = new BehaviorSubject<Admin>(
      this.cookie.check('admin') ? JSON.parse(this.cookie.get('admin')) : null);
  }

  public get currentTokenValue(): Admin {
    return this.currentTokenSubject.value;
  }

  public getToken(): string {
    return this.cookie.get('admin');
  }

  public login(login: string, password: string): any {
    return this.http.post<Admin>(`${environment.apiUrl}admin-auth`, { login, password })
      .subscribe((data) => {
        if (data) {
          this.cookie.set('admin', JSON.stringify(data.token));
          this.router.navigateByUrl('admin/dashboard');
        }
      });
  }

  public logout(): void {
    this.cookie.delete('admin');
    this.currentTokenSubject.next(null);
  }

}

