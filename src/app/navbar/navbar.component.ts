import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Navbar } from '../models/navbar.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {
  // @Input() childNav: Keg[];
  @Output() clickSender = new EventEmitter();

// onChange(optionFromMenu) {
//   this.filterByCompleteness = optionFromMenu;
// }

// toggleDone(submitMap: Map, setCompleteness: boolean) {
//    submitMap.done = setCompleteness;
//  }

nav = new Navbar(1, 0, "World");


}
