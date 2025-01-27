import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  
  public getSubject(){
    return this.http.get(`${baseUrl}/get-subject`);
  }
  public addBook(formdata:any){
    return this.http.post(`${baseUrl}/post-book`,formdata, {responseType:"text"});
  }
  public getBook(){
    return this.http.get(`${baseUrl}/get-book`);
  } 
  public getBookBySubjectId(id:any){
    return this.http.get(`${baseUrl}/get-book/${id}`);
  }
  public updateBookById(id:number ,formdata:any){
    return this.http.put(`${baseUrl}/update-book/${id}`,formdata, {responseType:"text"});
  }
  public deleteBookById(id:number){
    return this.http.delete(`${baseUrl}/delete-book/${id}`);
  }

}
