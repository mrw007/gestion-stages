import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { ListesRoutes } from './listes.routing';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { StagesValidesComponent } from './stages-valides/stages-valides.component';
import { StagesProposesComponent } from './stages-proposes/stages-proposes.component';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { EtudiantService } from 'app/Entities/Etudiant/etudiant.service';
import { CompteService } from 'app/Entities/Compte/compte.service';
import { EntreprisesAttenteComponent } from './entreprises-attente/entreprises-attente.component';
import { StageService } from 'app/Entities/Stage/stage.service';
import { StagesProposesEntComponent } from './stages-proposes-ent/stages-proposes-ent.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import 'bootstrap/dist/css/bootstrap.css';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PfeProposesComponent } from './pfe-proposes/pfe-proposes.component';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
import { PfePubliesComponent } from './pfe-publies/pfe-publies.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListesRoutes), ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    NgbTooltipModule,
    Ng2TableModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    EtudiantService,
    EnseignantService,
    EntrepriseService,
    CompteService,
    StageService,
    PfeService
  ],
  declarations: [EtudiantsComponent, EnseignantsComponent, EntreprisesComponent, StagesValidesComponent, StagesProposesComponent, EntreprisesAttenteComponent, StagesProposesEntComponent, PfeProposesComponent, PfePubliesComponent]
})
export class ListesModule { }
