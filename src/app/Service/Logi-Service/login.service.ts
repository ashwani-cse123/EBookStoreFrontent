import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(formdata:any){
    return this.http.post(`${baseUrl}/login`,formdata, {responseType:"text"});
  }

// private isLoggedInTest = true;
 

// public isLoggedInTestMethod(): boolean {
//   return this.isLoggedInTest;
// }

 
}
