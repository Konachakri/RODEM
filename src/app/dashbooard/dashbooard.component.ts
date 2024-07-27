import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbooard',
  templateUrl: './dashbooard.component.html',
  styleUrls: ['./dashbooard.component.css']
})
export class DashbooardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    //go to login
this._router.navigateByUrl("/login");
//delete token
sessionStorage.removeItem("my-app-token")
  }

}
