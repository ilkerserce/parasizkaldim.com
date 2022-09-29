import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsArchive } from '../home-main/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:3000/posts/?post_type=post';
  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get(this.url);
  }
}
