import { Component, OnInit } from '@angular/core';
import { Logout } from '../../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private cookie: CookieService
  ) { }

  public token = this.cookie.get('user');

  ngOnInit(): void {
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }

}
