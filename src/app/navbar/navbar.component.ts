import { Component, Output, EventEmitter } from '@angular/core';
import { Navbar } from '../models/navbar.model';

@Component({
  selector: 'app-new-navbar',
  templateUrl: './new-navbar.component.html',
  styleUrls: ['./new-navbar.component.css']
})

export class NewNavbarComponent {
  @Output() sendNavbar = new EventEmitter();

  submitForm(public round: number, public score: number, public map: string) {
    let newNavbar: Navbar = new Navbar(round, parseInt(score), map);
    this.sendNavbar.emit(newNavbar);
  }
}
