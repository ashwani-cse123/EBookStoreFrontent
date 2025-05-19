import { Component } from '@angular/core';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { AllCategoryfindComponent } from "../all-categoryfind/all-categoryfind.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dasboard',
  imports: [UserSidebarComponent, RouterOutlet, AllCategoryfindComponent, CommonModule],
  templateUrl: './user-dasboard.component.html',
  styleUrl: './user-dasboard.component.scss'
})
export class UserDasboardComponent {
hasToken: boolean = false;
 ngOnInit() {
    const token = localStorage.getItem('token');
    this.hasToken = !!token; // true if token exists
  }
}
