import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
public studentForm:FormGroup = new FormGroup({
  profile_picture:new FormControl(),
  school_logo:new FormControl(),
  school_city:new FormControl(),
  school_pin:new FormControl(),
  school_name:new FormControl(),
  email:new FormControl(),
  city:new FormControl(),
  dob:new FormControl(),
  name:new FormControl(),
  phone:new FormControl()

})
public id:string="";
  constructor(private _studentService:StudentService,private _activatedRoute:ActivatedRoute) { 
_activatedRoute.params.subscribe(
  (data:any)=>{
    this.id=data.id;

    _studentService.getStudent(data.id).subscribe(
      (data:any)=>{
        this.studentForm.patchValue(data);
      }
    )
  }
)
  }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.studentForm.value);

if(this.id){
  //edit
  this._studentService.updateStudent(this.studentForm.value,this.id).subscribe(
    (data:any)=>{
      alert("updated successfully");
      this.studentForm.reset();
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
this._studentService.createstudent(this.studentForm.value).subscribe(
  (data:any)=>{
    alert("created successfully");
    this.studentForm.reset();
  },
  (err:any)=>{
    alert("internal server error");
  }
)
  }
}

}
