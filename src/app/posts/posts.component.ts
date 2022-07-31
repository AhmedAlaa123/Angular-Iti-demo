import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/Post-service/post.service';
import { IPost } from '../shard-class/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:IPost[]=[];
  constructor(private postsService:PostService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data=>{
      this.posts=data
    },error=>{
      alert(error.message)
    })
  }

}
