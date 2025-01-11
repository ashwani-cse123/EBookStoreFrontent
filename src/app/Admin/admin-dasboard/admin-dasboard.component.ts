import { Component } from '@angular/core';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dasboard',
  imports: [AdminSidebarComponent,RouterOutlet],
  templateUrl: './admin-dasboard.component.html',
  styleUrl: './admin-dasboard.component.scss'
})
export class AdminDasboardComponent {

}
