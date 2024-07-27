import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient:HttpClient) { }
        
    getAccounts():Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
      
    }
    getFilterdAccounts(term:string):Observable<any>{
      return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
        
      }
      getSortedAccounts(column:string,order:string):Observable<any>{
        return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
          
        }
        getSpecificAccounts(number:number):Observable<any>{
          return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?id="+number);
            
          }
          getPagedAccounts(limit:number,pages:number):Observable<any>{
            return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+pages);
              
            }
            deleteAccounts(id:string):Observable<any>{
              return  this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
                
              }
              createAccounts(data:any):Observable<any>{
                return  this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
                  
                }

                //details
                getAccount(id:string):Observable<any>{
                  return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
                    
                  }
                  //edit
                  updateAccount(data:any,id:string):Observable<any>{
                    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data);
                  }
  }




