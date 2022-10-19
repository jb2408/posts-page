import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { CommentData } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiUrl + environment.postUrl);
  }
  getAllComments(): Observable<CommentData[]> {
    return this.http.get<CommentData[]>(
      environment.apiUrl + environment.commentsUrl
    );
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + environment.usersUrl);
  }
}
