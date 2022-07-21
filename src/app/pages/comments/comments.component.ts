import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentResult, Comments} from 'src/app/interfaces/comment';
import { CommentsService } from 'src/app/services/comments.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  comments: Comments [] = [];

  constructor(private service: CommentsService, private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getComments(Number(id)).subscribe((result: CommentResult) =>{
      this.comments = result.data;
    });
  }

  ngOnInit(): void {
  }

}
