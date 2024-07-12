import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
public ages:number[]=[10,20,30,40,50,60];
public states:string[]=['Andhrapradesh','Telangana','Tamilnaddu','Karnataka'];

public products:any=[
  {name:'pen',price:20,rating:4},
  {name:'phone',price:9000,rating:4.5},
  {name:'laptop',price:45000,rating:4.8},
  {name:'remote',price:100,rating:2},
  {name:'shirt',price:500,rating:1.5}
]
  constructor() { }

  ngOnInit(): void {
  }

}
