import { Component, OnInit, Output } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'your-comp',
  styles: ['agm-map { height: 300px; /* height is required */ }'],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude'
      [mapTypeId]='mapType'>
    </agm-map>
  `
})
export class MapComponent {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';
}
