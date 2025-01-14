import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private _http:HttpClient) { }

  public getCategory(){
    return this._http.get(`${baseUrl}/get-category`);
  }

  public addCategory(formdata:any){
    return this._http.post(`${baseUrl}/add-category`,formdata, {responseType:"text"});
  }

  public deleteCategory(id:number){
    return this._http.delete<any>(`${baseUrl}/delete-category/${id}`);
  }

  public updateCategory(id:number, formData:any){
    return this._http.put(`${baseUrl}/update-category/${id}`, formData, {responseType: "text"});
  }
}
