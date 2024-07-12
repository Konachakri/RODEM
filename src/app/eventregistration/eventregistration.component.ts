import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent implements OnInit {
  public user:String[]=[];
  public newuser:string='';
  constructor() { }

  ngOnInit(): void {
  }
  reg(){
    if(this.newuser !=""){
      this.user.push(this.newuser.trim());
      this.newuser='';
    }
  }

}
