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

  public token;

  constructor(
    private router: Router,
    private authAdminService: AuthAdminService
  ) { }

  ngOnInit(): void {
    this.token = this.authAdminService.currentTokenValue;
  }

  public logout(): void {
    this.authAdminService.logout();
    this.router.navigateByUrl('admin/login');
  }

}
