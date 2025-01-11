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
}
