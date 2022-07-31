import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shard-class/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string='https://jsonplaceholder.typicode.com/posts'
  PostsList:IPost[]=[];
  constructor(private http:HttpClient)   {

   }
   getPosts():Observable<IPost[]>
   {
      return this.http.get<IPost[]>(this.url)
   }
}
