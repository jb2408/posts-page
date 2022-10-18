import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  constructor(private _postService: PostsService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this._postService.getAllPosts().subscribe((res) => {
      console.log(res);
    });
  }
}
