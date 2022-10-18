import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiUrl + environment.postUrl);
  }
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      environment.apiUrl + environment.commentsUrl
    );
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + environment.usersUrl);
  }
}
