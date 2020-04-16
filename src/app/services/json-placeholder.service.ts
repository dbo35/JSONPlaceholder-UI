import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

  /** fetch record */
  get(type: ENDPOINTS, nestedRoute?: string) {
    return this.http.get<{[key: string]: any}[]>(`${environment.apiUrl}${type ? type : ''}${nestedRoute ? nestedRoute : ''}`);
  }

  /** add record */
  post(type: ENDPOINTS, payload: {[key: string]: any}, nestedRoute?: string) {
    return this.http.post(`${environment.apiUrl}${type ? type : ''}${nestedRoute ? nestedRoute : ''}`, payload);
  }

  /** edit record */
  put(type: ENDPOINTS, payload: {[key: string]: any}, nestedRoute?: string) {
    return this.http.put(`${environment.apiUrl}${type ? type : ''}${nestedRoute ? nestedRoute : ''}`, payload);
  }

  /** delete record */
  delete(type: ENDPOINTS, nestedRoute: string) {
    return this.http.delete(`${environment.apiUrl}${type}${nestedRoute}`);
  }

}
