import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  public account:any={};

  constructor(private _activateRoute:ActivatedRoute,_accountService:AccountService) { 
    _activateRoute.params.subscribe(
      (data:any)=>{
        
_accountService.getAccount(data.id).subscribe(
  (data:any)=>{
    this.account=data;
  },
  (err:any)=>{
    alert("internal server error");
  }
)
      }
    )
  }

  ngOnInit(): void {
  }

}
