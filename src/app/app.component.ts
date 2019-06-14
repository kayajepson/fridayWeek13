import { Component } from '@angular/core';
import { Navbar } from './models/navbar.model';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus = new Navbar(1,0,"World");
  latitude:44.0521;
  longitude:-123.0868;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var streetViewService = new google.maps.StreetViewService();
    streetViewService.getPanoramaByLocation(
      new google.maps.LatLng(44.0521, -123.0868),
      15,
      function(data, status) {
        console.log(data, status)
      }
    )
    var mapProp = {
      center: new google.maps.LatLng(44.0521, -123.0868),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }
  // setCenter(e:any){
  //   this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  // }
}
