import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-persone-details',
  templateUrl: './persone-details.component.html',
  styleUrls: ['./persone-details.component.scss']
})
export class PersoneDetailsComponent implements OnInit {
  presonName:string=''
  constructor() { }
    @Output() personEvent=new EventEmitter();
    ngOnInit(): void {
    }

    handelChangeName()
    {
      this.personEvent.emit(this.presonName);
    }

}
