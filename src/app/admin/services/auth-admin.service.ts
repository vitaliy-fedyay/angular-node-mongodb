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

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) { }

  public get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public getToken(): string {
    return this.cookie.get('admin');
  }

  public login(login: string, password: string): any {
    return this.http.post<Admin>(`${environment.apiUrl}admin-auth`, { login, password })
      .subscribe((data) => {
        if (data) {
          this.cookie.set('admin', JSON.stringify(data.token));
          this.loggedIn.next(true);
          this.router.navigateByUrl('admin/dashboard');
        }
      });
  }

  public logout(): void {
    this.cookie.delete('admin');
    this.loggedIn.next(false);
  }

}

