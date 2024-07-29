import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidator } from '../login/Validators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email,domainValidator]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required])
    }),
    type: new FormControl(),
    // busfee:new FormControl(),
    // hostelfee:new FormControl()

    cards:new FormArray([])
  })
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
          number: new FormControl(null,[Validators.required]),
          expiry:new FormControl(null,[Validators.required]),
          cvv:new FormControl(null,[Validators.required])
      })
    )
  }

  deletecard(i:number){
    this.cardsFormArray.removeAt(i);

  }

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'Dayscholor') {
          //add bus fee
          this.userForm.addControl('busfee', new FormControl(null, [Validators.required, Validators.min(10000)]));
          this.userForm.removeControl('hostelfee');
        }
        else if (data == 'Residential') {
          //add hostel fee
          this.userForm.addControl('hostelfee', new FormControl(null, [Validators.required, Validators.min(15000)]));
          this.userForm.removeControl('busfee');
        }
      }
    )
  }


  ngOnInit(): void {
  }
  submit() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm);
  }

}
