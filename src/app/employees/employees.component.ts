import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:any=[
    {name:'chakri',age:26,dob: new Date("01/09/1998"),experience:3,package:9},
    {name:'pavan',age:25,dob: new Date("05/24/1999"),experience:4,package:10},
    {name:'hari',age:28,dob:new Date("02/21/1996"),experience:5,package:16},
    {name:'swamy',age:27,dob:new Date("04/14/1997"),experience:2,package:7},
    {name:'dp',age:24,dob:new Date  ("04/14/2000"),experience:7,package:20},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }
  

}
