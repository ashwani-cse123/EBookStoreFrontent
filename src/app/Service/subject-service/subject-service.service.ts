import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor(private _http:HttpClient) { }

  public getSubject(){
    return this._http.get(`${baseUrl}/get-subject`);
  }

  public addSubject(formdata:any){
    return this._http.post(`${baseUrl}/save-subject`,formdata, {responseType:"text"});
  }

  public deleteSubject(id:number){
    return this._http.delete(`${baseUrl}/delete-subject/${id}`);
  }

  public updateSubject(id:number, formData:any){
    return this._http.put(`${baseUrl}/update-subject/${id}`, formData, {responseType: "text"});
  }

  public getSubjectByCategoryId(id: number){
    return this._http.get(`${baseUrl}/get-subject/${id}`);
  }
}
