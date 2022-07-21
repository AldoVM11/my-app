import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentResult } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { 
    
  }
  getComments(id: number){
    return this.http.get<CommentResult>("http://localhost:3000/comments/"+id);
}
}
