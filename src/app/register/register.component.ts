import { Component, OnInit } from '@angular/core';
import { IRegisterUser } from '../shard-class/IRegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser:IRegisterUser={} as IRegisterUser;
  socialList:string[]=[];
  constructor() { 
    this.socialList=['Facebook','Twitter','Google']
  }

  ngOnInit(): void {
  }

}
