import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: CommentData;

  constructor() {}

  ngOnInit(): void {}
}
