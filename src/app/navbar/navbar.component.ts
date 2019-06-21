import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Navbar } from '../models/navbar.model'

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

nav = new Navbar(1, 0, "World");

}
