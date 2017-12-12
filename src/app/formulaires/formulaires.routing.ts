import { Routes } from '@angular/router';

import { ProposerStageComponent } from './proposer-stage/proposer-stage.component';
import { PublierStageComponent } from 'app/formulaires/publier-stage/publier-stage.component';
import { PublierPfeComponent } from 'app/formulaires/publier-pfe/publier-pfe.component';
import { ProposerPfeComponent } from 'app/formulaires/proposer-pfe/proposer-pfe.component';

export const FormulairesRoutes: Routes = [{
    path: '',
    children: [{
      path: 'proposer_stage',
      component: ProposerStageComponent,
      data: {
        heading: 'Proposer un stage'
      },
      
    },
    {
      path: 'publier_stage',
      component: PublierStageComponent,
      data: {
        heading: 'Publier un stage'
      },
      
    },
    {
      path: 'publier_pfe',
      component: PublierPfeComponent,
      data: {
        heading: 'Publier un pfe'
      },
      
    },
    {
      path: 'proposer_pfe',
      component: ProposerPfeComponent,
      data: {
        heading: 'Proposer un pfe'
      },
      
    }]

}];
