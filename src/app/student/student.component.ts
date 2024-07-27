import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public students:any=[];
  public term:string="";

  constructor(private _studentService:StudentService) { 
    
    _studentService.getstudent().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  ngOnInit(): void {
  }

  filter(){
    this._studentService.getFilteredstudent(this.term).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  delete(id:string){
    this._studentService.deletestudent(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
      },
      (err:any)=>{
        alert("deletioon failed");
      }
    )
  }

}
