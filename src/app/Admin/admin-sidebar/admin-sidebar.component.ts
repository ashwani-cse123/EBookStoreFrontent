import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { mdiDelete, mdiPlus, mdiUpdate } from '@mdi/js';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../../Service/auth/auth.service';
 
@Component({
  selector: 'app-admin-sidebar',
  imports: [MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterLink,
    MatMenuModule,
    RouterOutlet,
    MatSidenavModule

    
     
  ],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,private auth:AuthService) {
    this.matIconRegistry.addSvgIconLiteral(
      'mdiPlus',
      this.domSanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${mdiPlus}" /></svg>`)
    );
  }
  mdiDelete = mdiDelete; // Path data for the delete icon
  iconSize = '24px'; 
  mdiUpdate = mdiUpdate; // Path data for the update icon
  sidenav: any;

  // logoutAdmin(){
  //   this.auth.logout();


  // }

   
}

