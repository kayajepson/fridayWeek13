import { Component, Output, EventEmitter } from '@angular/core';
import { Navbar } from './models/navbar.model';
import { NgModule, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() sendScore = new EventEmitter();
  submitForm() {
    let score = 100;
      this.currentFocus.round += 1;
      this.currentFocus.score = score;
      this.currentFocus.map;
    }
  title = 'app';
  currentFocus = new Navbar(1,0,"World");
}
