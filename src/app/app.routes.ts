import { Routes } from '@angular/router';
import { SignUpPage } from './sign-up/sign-up.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.page').then((m) => m.SignUpPage),
  },

  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },

  {
    path: 'message/:id',
    loadComponent: () =>
      import('./view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full',
  },
];

