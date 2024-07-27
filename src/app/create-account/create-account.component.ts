import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup= new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl()
  })
  public id:string="";

  constructor(private _accountService:AccountService,private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        // alert(data.id)
        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue(data);
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.accountForm.value);

    if(this.id){
      //edit
      this._accountService.updateAccount(this.accountForm.value,this.id).subscribe(
        (data:any)=>{
          alert("updated successfully");
          this.accountForm.reset();
        },
        (err:any)=>{
          alert("internal server error")
        }
      )
    }
    else{
      //create
    this._accountService.createAccounts(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("created successfully");
        this.accountForm.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
}

}
