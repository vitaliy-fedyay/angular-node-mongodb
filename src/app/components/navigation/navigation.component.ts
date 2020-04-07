import { Component, OnInit } from '@angular/core';
import { Logout } from '../../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  public logout(): void {
    this.authService.logout();
    this.store.dispatch(new Logout());
  }

}
