import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

export class UserFormLogin {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: User;

  constructor(model: User) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, [Validators.required, Validators.email]),
      password: new FormControl(this.model.password, [Validators.required, Validators.minLength(4)]),
    });
  }
}
