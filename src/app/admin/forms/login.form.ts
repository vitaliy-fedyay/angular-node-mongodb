import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Admin } from '../model/admin.model';

export class AdminFormLogin {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: Admin;

  constructor(model: Admin) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm(): void {
    this.formGroup = this.formBuilder.group({
      nickname: new FormControl(this.model.nickname, Validators.required),
      password: new FormControl(this.model.password, Validators.required),
    });
  }
}
