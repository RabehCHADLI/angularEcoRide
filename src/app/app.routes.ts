import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VoyagesComponent } from './component/voyages/voyages.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


export const routes: Routes = [
  {
    path: 'voyages',
    title: 'EcoRide | Voyages',
    component: VoyagesComponent
  },
  {
    path: 'voyage',
    title: 'EcoRide | Voyage',
    component: VoyagesComponent
  },
  {
    path: 'reservation',
    title: 'EcoRide | Réservation',
    component: ReservationComponent
  },
  {
    path: 'login',
    title: 'EcoRide | Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'EcoRide | Login',
    component: RegisterComponent
  },
  {
    path: '',
    title: 'EcoRide',
    component: HomeComponent
  },
];
