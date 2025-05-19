import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  constructor(private http:HttpClient) { }

  // //load category
  // public categories(){
  //   return this._http.get(`${baseUrl}/category/`);
  // }

  //add new category
  public addCategory(formdata:any){
    return this.http.post(`${baseUrl}/save`,formdata, {responseType:"text"});
  }
  public deleteItem(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/delete-category/${id}`);
  }
  public updateCategory(id:number ,formdata:any){
      return this.http.put(`${baseUrl}/updateCategory/${id}`,formdata, {responseType:"text"})
  }
  public getCategory(){
    const token = localStorage.getItem('token'); // or from a service
    console.log("category service token:" + token);
    const headers = new HttpHeaders({
      // 'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    console.log("this is from header: "+ headers);
    return this.http.get(`${baseUrl}/get-category`, { headers });
  }

  

}
