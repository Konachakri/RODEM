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


  constructor(private _AccountService:AccountService ) {

    _AccountService.getAccounts().subscribe(
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
    this._AccountService.getFilterdAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  sort(){
    this._AccountService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("interal server error")
      }
      
    )
  }
  specific(){
    this._AccountService.getSpecificAccounts(this.number).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  page(){
    this._AccountService.getPagedAccounts(this.limit,this.pages).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }

}
