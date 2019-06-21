import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      routing,
      AngularFireModule.initializeApp(firebaseConfig),
AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
