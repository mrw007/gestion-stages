import { Routes } from '@angular/router';

import { ProposerStageComponent } from './proposer-stage/proposer-stage.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'p_stage',
      component: ProposerStageComponent,
      data: {
        heading: 'Proposer un Stage'
      }
      
    }]
  }
];
