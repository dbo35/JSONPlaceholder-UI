import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { PostItem } from '../models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'bi-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  @Input() postData: PostItem[];
  expandedItem: PostItem | null;
  constructor(private service: JsonPlaceholderService) { }

  showComments(post: PostItem) {
    post.showComments = true;
    // We are calling the server again in case the comments have changed.
    this.service.get(ENDPOINTS.POSTS, `/${post.id}/comments`)
      .subscribe((next) => {
        post.comments = next;
        post = Object.assign({}, post);
      });
  }

  hideComments(post: PostItem) {
    post.showComments = false;
  }

  ngOnInit(): void {
    if (!this.postData) {
      this.service.get(ENDPOINTS.POSTS)
        .subscribe((next: PostItem[]) => {
          this.postData = next;
        });
    }
  }

  ngOnDestroy() {

  }

}
