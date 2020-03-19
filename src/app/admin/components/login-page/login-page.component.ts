import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin.model';
import { AdminFormLogin } from '../../forms/login.form';
import { AuthAdminService } from '../../services/auth-admin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private model: Admin;
  public form: AdminFormLogin;

  constructor(private authAdminService: AuthAdminService) {
    this.model = new Admin();
    this.form = new AdminFormLogin(this.model);
  }

  ngOnInit(): void {
  }

  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    this.authAdminService.login(this.formGetter.email.value, this.formGetter.password.value);
  }

}
