import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public student:any={};

  constructor(private _activatedRoute:ActivatedRoute,_studentService:StudentService) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _studentService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.student=data;
          },
          (err:any)=>{
            alert("internal server error")
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
