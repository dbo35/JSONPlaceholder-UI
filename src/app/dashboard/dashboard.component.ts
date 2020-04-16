import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { PostItem } from '../models/post.model';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'bi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postData: Observable<PostItem[]>;
  userData: Observable<User[]>;
  constructor(private service: JsonPlaceholderService) { }

  filterByUser(id?: number) {
    if (!!id) {
      this.postData = this.service.get(ENDPOINTS.POSTS, `?userId=${id}`) as Observable<PostItem[]>;
    }
  }

  refresh(post?: PostItem) {
    this.postData = this.service.get(ENDPOINTS.POSTS).pipe(
      switchMap( (next) => {
        if (post) {
          next.push(post);
        }
        return of(next);
      })
    ) as Observable<PostItem[]>;

  }


  ngOnInit() {
    this.postData = this.service.get(ENDPOINTS.POSTS) as Observable<PostItem[]>;
    this.userData = this.service.get(ENDPOINTS.USERS) as Observable<User[]>;
  }

}
