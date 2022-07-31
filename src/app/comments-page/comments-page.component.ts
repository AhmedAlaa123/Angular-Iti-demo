import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentsService } from '../Services/comments-service/comments.service';
import { IComment } from '../shard-class/IComment';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit {

  comments: IComment[] = [];
  constructor(private activeRoute: ActivatedRoute, private commentsSerivce: CommentsService) {

  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      let postId = param.get('id');
      this.commentsSerivce.getAllCommnetsByPostId(postId?.toString()).subscribe(data => {
        this.comments = data;
        console.log(this.comments)
      }, error => {
        alert(error.message)
      })
    });



  }



}
