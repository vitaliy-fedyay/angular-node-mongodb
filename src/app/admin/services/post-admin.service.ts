import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostAdminService {

  constructor(private http: HttpClient) { }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}/register`, post);
  }
}
