import { Component } from '@angular/core';
import { Navbar } from './models/navbar.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus = new Navbar(1,0,"world");
}
