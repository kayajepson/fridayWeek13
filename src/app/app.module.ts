import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';


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
      routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
