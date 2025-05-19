import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor(private http:HttpClient) { }
  public getCategory(){
    return this.http.get(`${baseUrl}/get-category`);
  }
  public addSubject(formdata:any){
    return this.http.post(`${baseUrl}/add-subject`,formdata, {responseType:"text"});
  }
  public getSubject(){
    return this.http.get(`${baseUrl}/get-subject`);
  }
  public getSubjectByCategoryId(id:number){
    return this.http.get(`${baseUrl}/get-subject/${id}`);
  }
  public updateSubjectById(id:number ,formdata:any){
    return this.http.put(`${baseUrl}/update-subject/${id}`,formdata, {responseType:"text"});
  }
  public deleteSubjectById(id:number){
    return this.http.delete(`${baseUrl}/delete-subject/${id}`);
  }
}
