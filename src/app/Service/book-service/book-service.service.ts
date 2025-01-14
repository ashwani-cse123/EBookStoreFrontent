import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private _http:HttpClient) { }

  public getBook(){
    return this._http.get(`${baseUrl}/get-book`);
  }

  public addBook(formdata:any){
    return this._http.post(`${baseUrl}/save-book`,formdata, {responseType:"text"});
  }

  public deleteBook(id:number){
    return this._http.delete(`${baseUrl}/delete-book/${id}`);
  }

  public updateBook(id:number, formData:any){
    return this._http.put(`${baseUrl}/update-book/${id}`, formData, {responseType: "text"});
  }

  public getBookBySubjectId(id: number){
    return this._http.get(`${baseUrl}/get-book/${id}`);
  }
}
