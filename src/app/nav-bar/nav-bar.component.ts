import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../Service/Logi-Service/login.service';
import { AuthService } from '../Service/auth/auth.service';

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
export class NavBarComponent {
  

  
 

}
