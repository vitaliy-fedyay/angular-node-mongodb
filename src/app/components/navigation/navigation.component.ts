import { Component, OnInit } from '@angular/core';
import { Logout } from '../../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.store.dispatch(new Logout());
  }

}
