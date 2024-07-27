import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }

  getstudent():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  getFilteredstudent(term:string):Observable<any>{
return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }

  createstudent(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
      }

      deletestudent(id:string):Observable<any>{
        return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
          }

      //get student
      getStudent(id:string){
        return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
      }

      //edit
      updateStudent(data:any,id:string){
        return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,data)
      }
      

}
