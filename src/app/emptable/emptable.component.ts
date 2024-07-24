import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements OnInit {
  public emp: string = "";

  public newEmp = {
    EmpName: "",
    package: 0,
    age: 0,
    doj:""
  };

  public employees: any[] = [
    { EmpName: 'pavan', package: 1000000, age: 25, doj:new Date("12/6/1998") },
    { EmpName: 'kona', package: 800000, age: 29,doj:new Date("12/6/1998") },
    { EmpName: 'raja', package: 400000, age: 24, doj:new Date("12/6/1998")},
    { EmpName: 'dev', package: 300000, age: 35, doj:new Date("12/6/1998") },
    { EmpName: 'ram charan', package: 700000, age: 42, doj:new Date("12/6/1998")},
    { EmpName: 'prasad', package: 600000, age: 75, doj:new Date("12/6/1998") },
    { EmpName: 'swamy', package: 2500000, age: 45,doj:new Date("12/6/1998")},
    { EmpName: 'pramod', package: 900000, age: 27,doj:new Date("12/6/1998")}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  search(emp:string){
    this.employees = this.employees.filter( employee=> employee.EmpName.includes(emp));
  }

  openModal() {
    // Use Angular's ViewChild to open the modal instead of jQuery
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  delete(index: number) {
    this.employees.splice(index, 1);
  }

  addEmployee() {
    this.employees.push({ ...this.newEmp });
    this.newEmp = { EmpName: "", package: 0, age: 0, doj:"" };
    this.closeModal();
  }

  sortByLowToHigh() {
    this.employees.sort((a, b) => a.package - b.package);
  }

  sortByHighToLow() {
    this.employees.sort((a, b) => b.package - a.package);
  }

  totalEmployees() {
    alert(`Total employees: ${this.employees.length}`);
  }

  addtoCart() {
    this.employees.push({...this.newEmp});
   this.newEmp={EmpName:'',package:0,age:0,doj:""};
   }
}


