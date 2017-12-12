import { Routes } from '@angular/router';

import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { StagesValidesComponent } from './stages-valides/stages-valides.component';
import { StagesProposesComponent } from './stages-proposes/stages-proposes.component';
import { EntreprisesAttenteComponent } from 'app/listes/entreprises-attente/entreprises-attente.component';
import { StagesProposesEntComponent } from 'app/listes/stages-proposes-ent/stages-proposes-ent.component';
import { PfeProposesComponent } from 'app/listes/pfe-proposes/pfe-proposes.component';
import { PfePubliesComponent } from 'app/listes/pfe-publies/pfe-publies.component';

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
      path: 'stages_proposes_ent',
      component: StagesProposesEntComponent,
      data: {
        heading: 'Liste de Stages Proposés par vous'
      },
    },
    {
      path: 'entreprises_attente',
      component: EntreprisesAttenteComponent,
      data: {
        heading: "Liste des demendes d'inscription d'entreprises"
      },
    },
    {
      path: 'pfe_proposes',
      component: PfeProposesComponent,
      data: {
        heading: 'Liste de Pfe Proposés'
      },
    },
    {
      path: 'pfe_pub',
      component: PfePubliesComponent,
      data: {
        heading: 'Liste de Pfe Publiés'
      },
    }]
  }
];
