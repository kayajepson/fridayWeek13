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

    var geocoder = new google.maps.Geocoder();
    var address = "2 Simei Street 3, Singapore, Singapore 529889";

    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();

            console.log(latitude + " " + longitude);

            var svService = new google.maps.StreetViewService();
            var panoRequest = {
                location: results[0].geometry.location,
                preference: google.maps.StreetViewPreference.NEAREST,
                radius: 50,
                source: google.maps.StreetViewSource.OUTDOOR
            };

            var findPanorama = function(radius) {
                panoRequest.radius = radius;
                svService.getPanorama(panoRequest, function(panoData, status){
                    if (status === google.maps.StreetViewStatus.OK) {
                        var panorama = new google.maps.StreetViewPanorama(
                            document.getElementById('street-view'),
                            {
                                pano: panoData.location.pano,
                            });
                    } else {
                        //Handle other statuses here
                        if (radius > 200) {
                            alert("Street View is not available");
                        } else {
                            findPanorama(radius + 5);
                        }
                    }
                });
            };

            findPanorama(50);
        }
    });
}
}
