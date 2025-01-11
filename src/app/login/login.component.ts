import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../Service/Logi-Service/login.service';


@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    MatSnackBarModule,
    FormsModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  
loginData:any={
  username:'',
  password:'',
  };
  snack: any;
  //loginStatusSubject:any;

  constructor(private snake:MatSnackBarModule ,private login:LoginService,private router:Router){}

  ngOnInit():void{

  }

  formSubmit(){
    console.log('login btn clicked');
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open('Username is required !!','');
      return;
    }
  
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open('Password is required !!','');
      return;
    }
  
    //request to server or in this case our hard-coded login service
    if(this.login.login(this.loginData.username, this.loginData.password)){
      this.login.getUserTest();
      console.log(this.login.getUserRole());
      if(this.login.getUserRole()==='ADMIN'){
        //admin dashboard
        this.router.navigate(['admin']);
      }else if(this.login.getUserRole()==='NORMAL'){
        //user dashboard
        this.router.navigate(['user-dashboard']);
      }else{
        this.login.logoutTest();
      }
    }else{
      this.snack.open('Invalid detail !! try again...','', {
        duration:3000,
      });
    }
  }
}
