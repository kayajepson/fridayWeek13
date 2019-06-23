
import { Component, OnInit, Output } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { Router } from '@angular/router';
import { MapService } from '../map.service';

import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'map-comp',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html'
})
export class MapComponent {
  constructor() {}

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

      this.initMiniMap();
    }

    initMiniMap() {
      var myLatLng = {lat: 14.599, lng: 28.673};

      var map = new google.maps.Map(document.getElementById('small-map'), {
        zoom: 1,
        center: myLatLng
      });

      google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
      });

      function placeMarker(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }
    }

  }
