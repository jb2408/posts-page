import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { CommentData } from 'src/app/models/comment';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss'],
})
export class DetailsPostComponent implements OnInit {
  private routeSub!: Subscription;
  post!: Post;
  postId!: string;
  user!: User;
  comments!: CommentData[];
  allPosts!: Post[];
  allUsers!: User[];
  allComments!: CommentData[];
  constructor(
    private route: ActivatedRoute,
    private _postService: PostsService
  ) {}
  ngOnInit(): void {
    this.getAllPosts();
    this.routeSub = this.route.params.subscribe((params) => {
      this.postId = params['postId'];
    });
  }
  getAllPosts() {
    this._postService.getAllPosts().subscribe((res) => {
      this.allPosts = res;
      this.getSpecificPost();
      this.getAllUsers();
    });
  }
  getAllUsers() {
    this._postService.getAllUsers().subscribe((res) => {
      this.allUsers = res;
      this.getSpecificUser();
      this.getAllComments();
    });
  }
  getSpecificPost(): void {
    this.post = this.allPosts.find((e) => {
      return e.id.toString() === this.postId;
    }) as Post;
  }
  getSpecificUser(): void {
    this.user = this.allUsers.find((e) => {
      return e.id === this.post.userId;
    }) as User;
  }

  getAllComments() {
    this._postService.getAllComments().subscribe((res) => {
      this.allComments = res;
      this.getSpecificComments();
    });
  }
  getSpecificComments(): void {
    this.comments = this.allComments.filter((e) => {
      return e.postId === this.post.id;
    }) as CommentData[];
    console.log(this.comments);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
