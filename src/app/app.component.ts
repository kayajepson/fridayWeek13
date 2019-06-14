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

//   ngOnInit() {
//     var mapProp = {
//       center: new google.maps.LatLng(44.0521, -123.0868),
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
//   }
//   setMapType(mapTypeId: string) {
//     this.map.setMapTypeId(mapTypeId)
//   }
//   // setCenter(e:any){
//   //   this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
//   // }
// }

ngOnInit() {
  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: 37.869, lng: -122.255},
        pov: {
          heading: 270,
          pitch: 0
        },
        visible: true
  });

  panorama.addListener('pano_changed', function() {
      var panoCell = document.getElementById('pano-cell');
      panoCell.innerHTML = panorama.getPano();
  });

  panorama.addListener('links_changed', function() {
      var linksTable = document.getElementById('links_table');
      while (linksTable.hasChildNodes()) {
        linksTable.removeChild(linksTable.lastChild);
      }
      var links = panorama.getLinks();
      for (var i in links) {
        var row = document.createElement('tr');
        linksTable.appendChild(row);
        var labelCell = document.createElement('td');
        labelCell.innerHTML = '<b>Link: ' + i + '</b>';
        var valueCell = document.createElement('td');
        valueCell.innerHTML = links[i].description;
        linksTable.appendChild(labelCell);
        linksTable.appendChild(valueCell);
      }
  });

  panorama.addListener('position_changed', function() {
      var positionCell = document.getElementById('position-cell');
      positionCell.firstChild.nodeValue = panorama.getPosition() + '';
  });

  panorama.addListener('pov_changed', function() {
      var headingCell = document.getElementById('heading-cell');
      var pitchCell = document.getElementById('pitch-cell');
      headingCell.firstChild.nodeValue = panorama.getPov().heading + '';
      pitchCell.firstChild.nodeValue = panorama.getPov().pitch + '';
  });
}
