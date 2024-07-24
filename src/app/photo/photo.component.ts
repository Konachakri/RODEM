import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  public names:any=[];

  constructor(private _photoService:PhotoService) { 

    _photoService.getMemes().subscribe(
      (data:any)=>{
        this.names=data.data.memes;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  ngOnInit(): void {
  }

}
