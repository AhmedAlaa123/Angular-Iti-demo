import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/shard-class/IComment';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url:string='https://jsonplaceholder.typicode.com/posts/';
  constructor(private http:HttpClient) { }

  getAllCommnetsByPostId(postId:any):Observable<IComment[]>
  {
    return this.http.get<IComment[]>(this.url+`${postId}/comments`);
  }
}
