import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { Post } from '../models/post.model';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { PosttableItem } from '../posttable/posttable-datasource';

@Component({
  selector: 'bi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postData: Post[];
  expandedItem: Post | null;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  posts: Observable<Post[]>;

  constructor(private breakpointObserver: BreakpointObserver, private service: JsonPlaceholderService) { }

    showComments(post: Post) {
      this.service.get(ENDPOINTS.POSTS, `/${post.id}/comments`)
        .subscribe( (next) => {
          post.comments = next;
          post = Object.assign({}, post);
        });
    }

  ngOnInit() {
    this.service.get(ENDPOINTS.POSTS)
      .subscribe((next: Post[]) => {
        this.postData = next;
      });
  }

}
