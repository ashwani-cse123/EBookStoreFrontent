import { Component, NgProbeToken } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-user-sidebar',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterLink,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    MatToolbarModule
  ],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss'
})
export class UserSidebarComponent {

constructor(private router:Router){}
  isMenuOpen: boolean = false; // Tracks the state of the menu icon

  /**
   * Toggles the menu open/close state and updates the icon
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logoff(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
