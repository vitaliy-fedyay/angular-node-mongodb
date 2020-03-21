import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from '../../model/post.model';
import { AdminFormPost } from '../../forms/post form';
import { PostAdminService } from '../../services/post-admin.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  private model: Post;
  public form: AdminFormPost;

  constructor(private postAdminService: PostAdminService) {
    this.model = new Post();
    this.form = new AdminFormPost(this.model);
  }

  ngOnInit(): void {
  }

  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    const post: Post = {
      title: this.formGetter.title.value,
      content: this.formGetter.content.value,
      author: this.formGetter.author.value,
      date: new Date()
    };
    console.log(post);
    this.postAdminService.createPost(post).subscribe( () => this.form.formGroup.reset());
  }

}
