import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { FlowerDetailComponent } from './flower-detail/flower-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'play',
    component: MapComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
