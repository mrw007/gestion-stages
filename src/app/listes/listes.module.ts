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


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListesRoutes),
    NgbTooltipModule
  ],
  providers: [
    EtudiantService,
    EnseignantService,
    EntrepriseService
  ],
  declarations: [EtudiantsComponent, EnseignantsComponent, EntreprisesComponent, StagesValidesComponent, StagesProposesComponent]
})
export class ListesModule { }
