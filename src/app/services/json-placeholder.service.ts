import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { InMemoryDbService } from './in-memory-db.service';

export enum ENDPOINTS {
  POSTS = '/posts',
  COMMENTS = '/comments',
  ALBUMS = '/albums',
  PHOTOS = '/photos',
  TODOS = '/todos',
  USERS = '/users'
}

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  get(type: ENDPOINTS, nestedRoute?: string) {
    return this.http.get(`${environment.apiUrl}${type ? type : ''}${nestedRoute ? nestedRoute : ''}`);
  }

  post(type: ENDPOINTS, payload: {[key: string]: any}, nestedRoute?: string) {
    return this.http.post(`${environment.apiUrl}${type ? type : ''}${nestedRoute ? nestedRoute : ''}`, payload);
  }


}
