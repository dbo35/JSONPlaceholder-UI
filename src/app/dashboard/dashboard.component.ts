import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { PostItem } from '../models/post.model';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'bi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postData: Observable<PostItem[]>;
  userData: Observable<User[]>;
  constructor(private service: JsonPlaceholderService, private changeRef: ChangeDetectorRef) { }

  filterByUser(ev: number) {
    this.postData = this.service.get(ENDPOINTS.POSTS, ev > -1 ? `?userId=${ev}` : '') as Observable<PostItem[]>;
  }

  refresh(post?: PostItem) {
    if (post) {
      this.service.get(ENDPOINTS.POSTS).subscribe((next) => {
        this.postData = of([post, ...next]) as Observable<PostItem[]>;
      });
    }
  }

  deletePost(post: PostItem) {
    this.service.delete(ENDPOINTS.POSTS, `/${post.id}`).subscribe((next) => {
    });
    this.postData = this.postData.pipe(
      switchMap((next) => {
        return of(next.filter(v => v.id !== post.id));
      })
    );
  }


  ngOnInit() {
    this.postData = this.service.get(ENDPOINTS.POSTS) as Observable<PostItem[]>;
    this.userData = this.service.get(ENDPOINTS.USERS) as Observable<User[]>;
  }

}
