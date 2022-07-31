import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user-service/user.service';
import { IUSer } from '../shard-class/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss','../product-card/product-card.component.scss']
})
export class UsersComponent implements OnInit {

  users:any[]=[];
  constructor(private usersService:UserService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(data=>{
      this.users=data;
    },error=>{
      alert(error)
    })
  }

}
