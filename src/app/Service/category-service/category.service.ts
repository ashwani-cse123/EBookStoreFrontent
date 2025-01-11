import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  constructor(private _http:HttpClient) { }

  // //load category
  // public categories(){
  //   return this._http.get(`${baseUrl}/category/`);
  // }

  //add new category
  public addCategory(formdata:any){
    return this._http.post(`${baseUrl}/save`,formdata, {responseType:"text"});
  }
}
