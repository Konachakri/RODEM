import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companyForm:FormGroup=new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    founded:new FormControl(),
    ceo:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
    location:new FormGroup({
      address:new FormControl(null,[Validators.required,]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      zipcode:new FormControl(null,[Validators.required]),
      country:new FormControl(null,[Validators.required])
    }),
    type:new FormControl(),
    departments:new FormArray([])
  })

  get departmentsFormArray(){
    return this.companyForm.get('departments') as FormArray;
  }

  addDepartments(){
    this.departmentsFormArray.push(
      new FormGroup({
        name:new FormControl(null,[Validators.required]),
        head:new FormControl(null,[Validators.required]),
        employees:new FormControl(null,[Validators.required]),
        budget:new FormControl(null,[Validators.required])
      })
    )
  }

  deletedp(i:number){
    this.departmentsFormArray.removeAt(i);
  }

  constructor() { 
    this.companyForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='service'){
          //add client name
          this.companyForm.addControl('client name',new FormControl(null,[Validators.required]));
          this.companyForm.removeControl('product name');
          
        }
        else if(data=='product'){
          //add product name
          this.companyForm.addControl('product name',new FormControl(null,[Validators.required]));
          this.companyForm.removeControl('client name');
        }
      }
    )
  }

  ngOnInit(): void {
  }
  submit(){
    this.companyForm.markAllAsTouched();
    console.log(this.companyForm);
  }

}
