import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LoaderComponent } from "./loader/loader.component";

 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'YourBook';
}
