import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../admin/model/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAllPost(): Observable<any> {
    return this.http.get<Post>(`${environment.apiUrl}admin-posts`);
  }

  public getByIdPost(id: any): Observable<any> {
    id = { _id: id };
    return this.http.post<any>(`${environment.apiUrl}admin-post`, id);
  }

}
