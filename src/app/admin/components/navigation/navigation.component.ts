import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../../services/auth-admin.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  constructor(
    private cookie: CookieService,
    private router: Router,
    private authAdminService: AuthAdminService
  ) { }

  public token = this.cookie.get('admin');

  ngOnInit(): void {
  }

  public logout(): void {
    this.authAdminService.logout();
    this.router.navigateByUrl('admin/login');
  }

}
