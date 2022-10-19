import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  allPosts!: Post[];
  filteredPosts!: Post[];
  allUsers!: User[];

  usersFormGroup!: FormGroup;

  constructor(
    private _postService: PostsService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
    this.getAllUsers();

    this.usersFormGroup = this._formBuilder.group({
      ids: this._formBuilder.array([]),
    });
  }

  getAllPosts() {
    this._postService.getAllPosts().subscribe((res) => {
      this.allPosts = res;
      this.filterPosts();
    });
  }

  getAllUsers() {
    this._postService.getAllUsers().subscribe((res) => {
      this.allUsers = res;
    });
  }

  onUserChange($event: any) {
    const users = (<FormArray>this.usersFormGroup.get('ids')) as FormArray;

    if ($event.checked) {
      users.push(new FormControl($event.source.value));
    } else {
      const i = users.controls.findIndex(
        (x) => x.value === $event.source.value
      );
      users.removeAt(i);
    }
    this.filterPosts();
  }

  filterPosts(): void {
    if (this.usersFormGroup.value.ids.length > 0) {
      this.filteredPosts = this.allPosts.filter((e) =>
        this.usersFormGroup.value.ids.includes(e.userId.toString())
      );
    } else {
      this.filteredPosts = this.allPosts;
    }
  }
}
