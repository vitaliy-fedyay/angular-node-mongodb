import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/admin/model/post.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getByIdPost(params.id);
      }));
  }

}
