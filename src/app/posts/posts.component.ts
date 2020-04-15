import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'bi-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postData: Post[];
  expandedItem: Post | null;
  posts: Observable<Post[]>;
  constructor(private service: JsonPlaceholderService) { }

  showComments(post: Post) {
    this.service.get(ENDPOINTS.POSTS, `/${post.id}/comments`)
      .subscribe((next) => {
        post.comments = next;
        post = Object.assign({}, post);
      });
  }

  ngOnInit(): void {
    this.service.get(ENDPOINTS.POSTS)
      .subscribe((next: Post[]) => {
        this.postData = next;
      });
  }

}
