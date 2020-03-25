import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostAdminService {

  constructor(private http: HttpClient) { }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}create`, post);
  }

  public getAllPost(): Observable<any> {
    return this.http.get<Post>(`${environment.apiUrl}admin-posts`);
  }

  public deletePost(id: any): Observable<any> {
    console.log(id)
    return this.http.delete<any>(`${environment.apiUrl}admin-post-delete`, id)
  }

  public getByIdPost(id: any): Observable<any> {
    console.log(id)
    return this.http.post<any>(`${environment.apiUrl}admin-post`, id)
  }

  public updateById(post: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}admin-post-update`, post)
  }
}
