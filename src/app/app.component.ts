import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { PostsArchive } from './home-main/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parasizkaldim.com';

  PostArchive: object[]= [];
  posts: any;

  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
      this.PostArchive = this.posts;
      console.log("Array Test ediliyor.");
      console.log(this.PostArchive);

    });
    (err: any) =>{
      console.log(err);
    }

  }

}
