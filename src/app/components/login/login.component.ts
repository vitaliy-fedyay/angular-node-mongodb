import { Component, OnInit } from '@angular/core';
import { UserFormLogin } from 'src/app/forms/login.form';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';
import { User } from 'src/app/models/user.model';
import { Login } from '../../store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private model: User;
  public form: UserFormLogin;

  constructor(private store: Store<AppState>) {
    this.model = new User();
    this.form = new UserFormLogin(this.model);
  }

  ngOnInit(): void {
  }

  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    const payload = {
      email: this.formGetter.email.value,
      password: this.formGetter.password.value
    };
    this.store.dispatch(new Login(payload));
  }

}
