import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';


export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren:  './social/social.module#SocialModule'
  }, {
    path: 'contact',
    loadChildren: './email/email.module#EmailModule'
  },
  {
    path: 'listes',
    loadChildren: './listes/listes.module#ListesModule'
  },
  {
    path: 'formulaires',
    loadChildren: './formulaires/formulaires.module#FormulairesModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }, {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

