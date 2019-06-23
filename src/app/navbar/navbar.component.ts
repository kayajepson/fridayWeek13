import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Navbar } from '../models/navbar.model'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {
  @Output() clickSender = new EventEmitter();

// toggleDone(submitMap: Map, setCompleteness: boolean) {
//    submitMap.done = setCompleteness;
//  }

currentFocus = new Navbar(1,0,"World");

}
