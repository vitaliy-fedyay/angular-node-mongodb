import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthAdminService } from '../services/auth-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authAdminService: AuthAdminService,
    private router: Router
  ) { }

  public canActivate(): boolean {
    if (!this.authAdminService.getToken()) {
      this.router.navigateByUrl('/admin/login');
      return false;
    }
    return true;
  }


}
