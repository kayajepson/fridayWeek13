
import { Component, OnInit, Output } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'map-comp',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html'
})
export class MapComponent {
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;

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

//   initMiniMap() {
//   var myLatLng = {lat: -25.363, lng: 131.044};
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 2,
//     center: myLatLng
//   });
//
//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Make your guess!'
//   });
// }
}
