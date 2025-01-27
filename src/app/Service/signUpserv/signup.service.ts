import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  public addSignData(signUpObj:any){
    return this.http.post(`${baseUrl}/save-User`,signUpObj ,{responseType:"text"});
  }
}
