import { Injectable } from '@angular/core';
import { Map } from './models/map.model';
import { MAPS } from './maps';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MapService {
  new_maps: FirebaseListObservable<any[]>;
  official_maps: FirebaseListObservable<any[]>;
  popular_maps: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.new_maps = database.list('new_maps');
    this.official_maps = database.list('official_maps');
    this.popular_maps = database.list('popular_maps');
  }

  getNewMaps() {
    return this.new_maps;
  }
  getPopularMaps() {
    return this.popular_maps;
  }
  getOfficialMaps() {
    return this.official_maps;
  }

  // addMap(newMap: Map) {
  //   this.maps.push(newMap);
  // }

  // getMapById(MapId: number) {
  //   return this.database.object('maps/' + MapId);
  // }

}
