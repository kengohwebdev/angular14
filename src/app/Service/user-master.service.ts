// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
// export class UserService {

//     constructor(private http: HttpClient) {

//         apiurl = 'https//localhost:4200/api/UserMaster';

//     }

//     GetAllUser() {
//         return this.http.get(this.apiurl);
//     }

//     GetUserbyID(UserId: any) {
//         return.this.http.get(this.apiurl + '/' + UserId);
//     }

//     RemoveUser(UserId: any) {
//         return this.http.delete(this.apiurl + '/' + UserId);
//     }

//     UpdateUser(inputdata: any) {
//         return this.http.post(this.apiurl + '/ActivateUser', inputdata);
//     }

// }

//note need to be implement in vs