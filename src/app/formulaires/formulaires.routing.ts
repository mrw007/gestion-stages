import { Routes } from '@angular/router';

import { ProposerStageComponent } from './proposer-stage/proposer-stage.component';

export const FormulairesRoutes: Routes = [{
    path: '',
    children: [{
      path: 'proposer_stage',
      component: ProposerStageComponent,
      data: {
        heading: 'Proposer un stage'
      },
      
    }]
}];
