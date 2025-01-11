import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  //hardcode start

private users = [
  { username: 'admin', password: '123', role: 'ADMIN' },
  { username: 'user', password: '123', role: 'NORMAL' },
  { username: 'bhoopesh', password: '123', role: 'ADMIN' },
  { username: 'nitesh', password: '123', role: 'NORMAL' }
];

private isLoggedInTest = false;
private user: any = null;
public loginStatusSubjectTest = new Subject<boolean>();

public login(username: string, password: string): boolean {
  const user = this.users.find(u => u.username === username && u.password === password);
  if (user) {
    this.isLoggedInTest = true;
    this.user = user;
    this.loginStatusSubjectTest.next(true);
    return true;
  }
  return false;
}

public logoutTest(): void {
  this.isLoggedInTest = false;
  this.user = null;
  this.loginStatusSubjectTest.next(false);
}

public isLoggedInTestMethod(): boolean {
  return this.isLoggedInTest;
}

public getUserTest(): any {
  return this.user;
}

public getUserRole(): string {
  return this.user?.role || '';
}

//hardcode end










  // public loginStatusSubject = new Subject<boolean>();
  // constructor(private http:HttpClient) { }

  // //get current logged in user
  // public getCurrentUser(){
  //   return this.http.get(`${baseUrl}/current-user`);
  // }

  // //generate token
  // public generateToken(loginData:any){

  //   return this.http.post(`${baseUrl}/generate-token`,loginData)
  // }

  // //login user :set token in localStorage
  // public loginUser(token:any){
  //   localStorage.setItem('token',token);
    
  //   return true;
  // }

  // //isLogin: user is logged in or not
  // public isLoggedIn(){
  //   let tokenStr = localStorage.getItem("token");
  //   if(tokenStr==undefined || tokenStr== '' || tokenStr==null){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }


  // //logout: remove token from local storage
  // public logout(){
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  //   return true;
  // }

  // //get token 
  // public getToken(){
  //   return localStorage.getItem('token');
  // }

  // //set userDetails
  // public setUser(user:any){
  //   localStorage.setItem('user',JSON.stringify(user));

  // }

  // //get user
  // public getUser(){
  //   let userStr = localStorage.getItem('user');
  //   if(userStr!=null){
  //     return JSON.parse(userStr);
  //   }else{
  //     this.logout();
  //     return null;
  //   }
  // }

  // //get user role
  // public getUserRole(){
  //   let user = this.getUser();
  //   return user.authorities[0].authority;
  // }

}
