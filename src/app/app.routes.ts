import { Routes } from '@angular/router';
import { registrationRoutes } from './features/registration/registration.routes';

export const routes: Routes = [
  {
    path: 'registration',
    children: registrationRoutes,
  },
];
