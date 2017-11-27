import { Routes } from '@angular/router';

import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { StagesValidesComponent } from './stages-valides/stages-valides.component';
import { StagesProposesComponent } from './stages-proposes/stages-proposes.component';
import { EntreprisesAttenteComponent } from 'app/listes/entreprises-attente/entreprises-attente.component';

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
        heading: 'Liste des Entreprises'
      },
    },
    {
      path: 'stages_valides',
      component: StagesValidesComponent,
      data: {
        heading: 'Liste de Stages'
      },
    },
    {
      path: 'stages_proposes',
      component: StagesProposesComponent,
      data: {
        heading: 'Liste de Stages Proposés'
      },
    },
    {
      path: 'entreprises_attente',
      component: EntreprisesAttenteComponent,
      data: {
        heading: "Liste des demendes d'inscription d'entreprises"
      },
    }]
  }
];
