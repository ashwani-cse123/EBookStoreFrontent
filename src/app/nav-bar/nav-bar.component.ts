import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../Service/Logi-Service/login.service';

@Component({
  selector: 'app-nav-bar',
  imports: [MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    CommonModule

  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  isLoggedIn = false;
  user:any=null;
  constructor(public login:LoginService){}


  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedInTestMethod();
    this.user=this.login.getUserTest();
    this.login.loginStatusSubjectTest.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoggedInTestMethod();
      this.user=this.login.getUserTest();
    });
  }
  public logout(){
    // this.login.logout();
    // window.location.reload();
  //  this.login.loginStatusSubject.next(false);
  }

}
