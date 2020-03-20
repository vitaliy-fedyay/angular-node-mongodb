import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../model/post.model';

export class AdminFormPost {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: Post;

  constructor(model: Post) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm(): void {
    this.formGroup = this.formBuilder.group({
      title: new FormControl(this.model.title, Validators.required),
      content: new FormControl(this.model.content, Validators.required),
      author: new FormControl(this.model.author, Validators.required)
    });
  }
}
