import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateName } from '../CustomValidators/ValidateName';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notesForm:FormGroup={} as FormGroup;
  prducts:string[]=['product1','product2','product3','product4',]
  isHiddent:boolean=true
  constructor(private noteFormBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.notesForm=this.noteFormBuilder.group({
      name:['',[ValidateName,Validators.required]],
      product:[''],
      hasDiscount:[false],
      
      comments:this.noteFormBuilder.array([]),
    })
  }

  get Name(){
    return this.notesForm.get('name')
  }
  get Product(){
    return this.notesForm.get('product')
  }
  get HasDiscount(){
    return this.notesForm.get('hasDiscount')
  }
  get Discount(){
    return this.notesForm.get('discount');
  }
  get Comments(){
    return this.notesForm.get('comments') as FormArray
  }
  handelChange()
  {
    this.notesForm.get('hasDiscount')?.valueChanges
    .subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.notesForm.addControl('discount',this.noteFormBuilder.control('',[Validators.required]))
        this.isHiddent=false
      }
      else
      {
        this.notesForm.removeControl('discount')
        this.isHiddent=true
        // this.Discount?.setValue('hidden',true);
      }
      //this.Discount?.updateValueAndValidity();
    })
  }

  addComment()
  {
    this.Comments.push(this.noteFormBuilder.control(''))
  }
  removeComment(index:any)
  {
    this.Comments.removeAt(index);
  }
  
}
