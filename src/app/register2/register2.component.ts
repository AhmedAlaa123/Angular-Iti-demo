import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmPasswordValidators } from '../CustomValidators/ConfirmPassword';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {

  registerForm:FormGroup={} as FormGroup;
  socialList:string[]=['Facebook','Twitter','Google']
  constructor(private registerFormBuilder:FormBuilder) {

    this.registerForm=registerFormBuilder.group({
      userName:['',[Validators.required,Validators.minLength(8)]],
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,}@[a-z]{3,7}\.com$')]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]],
      social:['',[Validators.required]]
    },{validator:[ConfirmPasswordValidators]});


   }


 get UserName()
 {
  return this.registerForm.get('userName')
 }
   get Email(){
    return this.registerForm.get('email')
   }
   get Password()
   {
    return this.registerForm.get('password')
   }
   get ConfirmPassword()
   {
    return this.registerForm.get('confirmPassword')
   }
   get Social()
   {
    return this.registerForm.get('social')
   }
  ngOnInit(): void {
  }

}
