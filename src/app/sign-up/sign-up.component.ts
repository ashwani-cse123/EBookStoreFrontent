import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../Service/Logi-Service/login.service';
import { SignupService } from '../Service/signUpserv/signup.service';


@Component({
  selector: 'app-sign-up',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{


  constructor(private _snack:MatSnackBar ,private signUpdata:SignupService){}

  signUpObj:any = {
    "username": '',
    "password":  '',
    "firstName":  '',
    "lastName":  '',
    "email":  '',
    "phone":  ''
  };

  ngOnInit(): void {
     
  }

  
  formSubmit(){
    if(this.signUpObj.username.trim() =='' || this.signUpObj.username==null){
      this._snack.open('Title required !!','',{
        duration:3000,
      });
      return;
    }
    this.signUpdata.addSignData(this.signUpObj).subscribe((data:any)=>{
      this._snack.open('you have successfully signup your acount!!','',{
        duration:3000,
        
      });
    
      this.signUpObj = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      };
         
      },
      (error)=>{
        if (error.status === 500) {
          // Assuming the backend sends the error message in `error.error.message`
          const errorMessage = error.error?.message || 'username is alredy exist try another usename';
          this._snack.open(errorMessage, 'Close', { duration: 3000 });
      }
        console.log(this.signUpObj);
        console.log(error);
        
      });
  }

}
