import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


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
