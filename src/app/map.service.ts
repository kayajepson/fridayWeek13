import { Injectable } from '@angular/core';
import { Map } from './models/map.model';
import { MAPS } from './maps';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MapService {
  maps: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.maps = database.list('maps');
  }

  getMaps() {
    return this.maps;
  }

  // addMap(newMap: Map) {
  //   this.maps.push(newMap);
  // }

  // getMapById(MapId: number) {
  //   return this.database.object('maps/' + MapId);
  // }

}
