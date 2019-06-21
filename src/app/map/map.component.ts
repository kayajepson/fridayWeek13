
import { Component, OnInit, Output } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { Router } from '@angular/router';

import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'map-comp',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html'
})
export class MapComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    var fenway = {lat: 42.345573, lng: -71.098326};
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: fenway,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
  }
}
