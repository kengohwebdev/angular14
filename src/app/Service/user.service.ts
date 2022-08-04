import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

    // apiurl='https//localhost:4200/api/UserMaster';

   }

   ProceedLogin(inputdata:any){
    return this.http.post('https://localhost:7024/api/Account/login',inputdata);
   }

   IsLoggedIn(){
    return localStorage.getItem('token')!=null;
   }

   GetToken(){
    return localStorage.getItem('token')!=null?localStorage.getItem('token'):'';
   }

   Registration(inputdata:any){
    return this.http.post('https://localhost:7024/api/Account/signup',inputdata);
   }
}
