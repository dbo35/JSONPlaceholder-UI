import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService, ENDPOINTS } from '../services/json-placeholder.service';
import { PostItem } from '../models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'bi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postData: Observable<PostItem[]>;
  constructor(private service: JsonPlaceholderService) { }



  ngOnInit() {
    this.postData = this.service.get(ENDPOINTS.POSTS) as Observable<PostItem[]>;
  }

}
