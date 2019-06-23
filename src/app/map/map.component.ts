
import { Component, OnInit, Output } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { Router } from '@angular/router';
import { MapService } from '../map.service';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from '../app.component'


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
      let myLatLng = {lat: 14.599, lng: 28.673};
      let latGuess;
      let longGuess;
      let markers = [];
      var map = new google.maps.Map(document.getElementById('small-map'), {
        zoom: 1,
        center: myLatLng
      });

      google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
      });

      function placeMarker(location) {
        clearMarkers();
        let marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
        latGuess = marker.getPosition().lat();
        longGuess = marker.getPosition().lng();
        console.log("hello", latGuess);
      }

      // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }

    }

  }
