import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  @Input() public cnum1:number=0;
   @Input() public cnum2:number=0;
  @Input() public result:number=0;
   //create event
  @Output() public beEvent:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sum(){
    this.beEvent.emit(this.result=this.cnum1+this.cnum2);
  }
  

}
