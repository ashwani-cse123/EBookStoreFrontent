import { Component } from '@angular/core';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { AllCategoryfindComponent } from "../all-categoryfind/all-categoryfind.component";

@Component({
  selector: 'app-user-dasboard',
  imports: [UserSidebarComponent, RouterOutlet, AllCategoryfindComponent],
  templateUrl: './user-dasboard.component.html',
  styleUrl: './user-dasboard.component.scss'
})
export class UserDasboardComponent {

}
