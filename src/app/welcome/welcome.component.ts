import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MapService } from '../map.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
    providers: [MapService]
})
export class WelcomeComponent implements OnInit {
  maps: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {
  }


}
