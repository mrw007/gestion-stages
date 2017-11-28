import { Routes } from '@angular/router';

import { ProposerStageComponent } from './proposer-stage/proposer-stage.component';
import { PublierStageComponent } from 'app/formulaires/publier-stage/publier-stage.component';

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
      
    }]
}];
