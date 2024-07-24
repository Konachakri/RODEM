import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeemanagment',
  templateUrl: './employeemanagment.component.html',
  styleUrls: ['./employeemanagment.component.css']
})
export class EmployeemanagmentComponent implements OnInit {
  public employees:any[]=[
    {name:'chakri',empid:2561,age:26,phonenumber:9705911244,email:'ch@gmail.com',dob: new Date("01/09/1998"),experience:3,package:10},
    {name:'pavan', empid:2567 ,age:25,phonenumber:9121750641,email:'pa@gmail.com', dob: new Date("05/24/1999"),experience:4,package:15},
    {name:'hari', empid:2563,age:28,phonenumber:9000054376,email:'ha@gmail.com',dob:new Date("02/21/1996"),experience:5,package:20},
    {name:'swamy', empid:2566,age:27,phonenumber:9494450644,email:'sw@gmail.com',dob:new Date("04/14/1997"),experience:2,package:5},
    {name:'durga prasad', empid:2568,age:24,phonenumber:9491567617,email:'dp@gmail.com',dob:new Date  ("04/14/2000"),experience:7,package:23},
    
  ]
  public ename:string="";
  public emp={
    name:"",
    empid:0,
    age:0,
    phonenumber:0,
    email:0,
    dob:0,
    experience: 0,
    package:0
  }

  constructor() { }

  ngOnInit(): void {
  }
  addtoemp(){
    this.employees.push({...this.emp});
    this.emp={name:'', empid:0,age:0, phonenumber:0,email:0,dob:0,experience:0,package:0};
  }
  search(ename:string){
this.employees=this.employees.filter(employee=>employee.name.includes(ename));
  }
  packhl(){
    this.employees=this.employees.sort((a,b)=>b.package-a.package);
  }
  packlh(){
    this.employees=this.employees.sort((a,b)=>a.package-b.package);
  }
  exphl(){
    this.employees=this.employees.sort((a,b)=>b.experience-a.experience);
  }
  explh(){
    this.employees=this.employees.sort((a,b)=>a.experience-b.experience);
  }
  delete(i:number){
    this.employees.splice(i,1);
  }

}
