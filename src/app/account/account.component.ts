import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accounts:any=[];
  public term:string="";
  public column:string="";
  public order:string="";
  public number:number=0;
  public limit:number=0;
  public pages:number=0;
  public id:string="";


  constructor(private _accountService:AccountService ) {

    _accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
   }

  ngOnInit(): void {
  }
  filter(){
    this._accountService.getFilterdAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  sort(){
    this._accountService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("interal server error")
      }
      
    )
  }
  specific(){
    this._accountService.getSpecificAccounts(this.number).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  page(){
    this._accountService.getPagedAccounts(this.limit,this.pages).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }

  delete(id:string){
    this._accountService.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("deleted successflly");
      },
      (err:any)=>{
        alert("deletion failed");
      }
    )
  }

}
