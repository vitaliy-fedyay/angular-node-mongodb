import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../../services/auth-admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  public isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private authAdminService: AuthAdminService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authAdminService.isLoggedIn;
  }

  public logout(): void {
    this.authAdminService.logout();
    this.router.navigateByUrl('admin/login');
  }

}
