import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserFormRegister } from 'src/app/forms/registration.form';
import { AppState } from '../../store/app.states';
import { Store } from '@ngrx/store';
import { Registration } from '../../store/actions/auth.action';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private model: User;
  public form: UserFormRegister;

  constructor(private store: Store<AppState>) {
    this.model = new User();
    this.form = new UserFormRegister(this.model);
  }

  ngOnInit(): void {
  }

  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    const payload = {
      name: this.formGetter.name.value,
      surname: this.formGetter.surname.value,
      email: this.formGetter.email.value,
      phone: this.formGetter.phone.value,
      password: this.formGetter.password.value
    };
    this.store.dispatch(new Registration(payload));
  }

}
