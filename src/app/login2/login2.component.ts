import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  constructor(private formBuilder:FormBuilder) { 
    
  }
  loginForm=  this.formBuilder.group({
    userName:['',[Validators.required] ],
    password:['' , [Validators.required]]
  })

  get UserName (){
    return this.loginForm.get('userName');
  }

  get Password()
  {
    return this.loginForm.get('password');
  }

  ngOnInit(): void 
  {

  }

}
