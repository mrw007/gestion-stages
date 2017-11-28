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



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListesRoutes),
    NgbTooltipModule
  ],
  providers: [
    EtudiantService,
    EnseignantService,
    EntrepriseService,
    CompteService,
    StageService
  ],
  declarations: [EtudiantsComponent, EnseignantsComponent, EntreprisesComponent, StagesValidesComponent, StagesProposesComponent, EntreprisesAttenteComponent, StagesProposesEntComponent]
})
export class ListesModule { }
