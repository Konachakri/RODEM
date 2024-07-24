import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public titles:any=[];

  constructor(private _mailService:MailService) {

    _mailService.getTitle().subscribe(
      (data:any)=>{
        this.titles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
   }

  ngOnInit(): void {
    
  }

}
