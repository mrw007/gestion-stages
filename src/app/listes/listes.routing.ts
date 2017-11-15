import { Routes } from '@angular/router';

import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';

export const ListesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'etudiants',
      component: EtudiantsComponent,
      data: {
        heading: 'Liste Etudiants'
      },
      
    },{
      path: 'enseignants',
      component: EnseignantsComponent,
      data: {
        heading: 'Liste Enseignants'
      },
    },
    {
      path: 'entreprises',
      component: EntreprisesComponent,
      data: {
        heading: 'Liste Entreprises'
      },
    }]
  }
];
