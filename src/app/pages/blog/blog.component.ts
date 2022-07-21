import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { PostResult, Posts } from 'src/app/interfaces/post';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Posts [] = [];

  constructor(private service: UsersService) {
    this.getPosts();
   }

  ngOnInit(): void {
  }

  getPosts(): void{
    this.service.getPosts().subscribe((result: PostResult) =>{
      console.log(result.data);
      this.posts = result.data;
    });
  }
}
