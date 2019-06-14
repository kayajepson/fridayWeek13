import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
