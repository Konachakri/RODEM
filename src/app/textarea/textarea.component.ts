import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
 @Input() public ctext:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
