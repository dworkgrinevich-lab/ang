import { Routes } from '@angular/router';
import { RegistrationList } from './pages/registration-list/registration-list';
import { RegistrationCreate } from './pages/registration-create/registration-create';
import { RegistrationEdit } from './pages/registration-edit/registration-edit';

export const registrationRoutes: Routes = [
  {
    path: '',
    component: RegistrationList,
  },
  {
    path: 'create',
    component: RegistrationCreate,
  },
  {
    path: ':id/edit',
    component: RegistrationEdit,
  }
];
