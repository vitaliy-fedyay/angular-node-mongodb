import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

export class UserFormRegister {
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
      name: new FormControl(this.model.name, [Validators.required, Validators.minLength(4)]),
      surname: new FormControl(this.model.surname, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.model.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.model.phone, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(this.model.password, [Validators.required, Validators.minLength(8)])
    });
  }
}
