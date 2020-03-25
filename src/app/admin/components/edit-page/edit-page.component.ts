import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostAdminService } from '../../services/post-admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  public post: Post;
  public form: FormGroup;
  public postId;

  constructor(
    private postAdminService: PostAdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      switchMap((params: Params) => {
        this.postId = params.id;
        console.log('get query params ' + this.postId);
        return this.postAdminService.getByIdPost(this.postId);
      })
    ).subscribe((post: Post) => {
      console.log(JSON.stringify(post));
      this.post = post;
      this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          content: new FormControl(post.content, Validators.required),
          author: new FormControl(post.author, Validators.required)
        });
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const post = {
      _id: this.postId,
      title: this.form.value.title,
      content: this.form.value.content,
      author: this.form.value.author
    };
    this.postAdminService.updateById(post).subscribe(
       (data) => {
         if (data) {
           this.router.navigateByUrl('/admin/dashboard');
         }
       });
  }

}
