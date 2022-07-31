import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../shard-class/LoginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser:LoginUser;
  constructor() { 
    this.loginUser=new LoginUser('','')
  }

  ngOnInit(): void {
  }

}
