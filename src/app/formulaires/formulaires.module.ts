import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposerStageComponent } from './proposer-stage/proposer-stage.component';
import { FormulairesRoutes } from './formulaires.routing';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageService } from 'app/Entities/Stage/stage.service';
import { PublierStageComponent } from './publier-stage/publier-stage.component';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { ProposerPfeComponent } from './proposer-pfe/proposer-pfe.component';
import { PublierPfeComponent } from './publier-pfe/publier-pfe.component';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
@NgModule({
  imports: [
    RouterModule.forChild(FormulairesRoutes),
    CommonModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StageService,
    EntrepriseService,
    PfeService
  ],
  declarations: [ProposerStageComponent, PublierStageComponent, ProposerPfeComponent, PublierPfeComponent]
})
export class FormulairesModule { }
