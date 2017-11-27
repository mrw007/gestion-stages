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
<<<<<<< HEAD
import { CompteService } from 'app/Entities/Compte/compte.service';
=======
import { EntreprisesAttenteComponent } from './entreprises-attente/entreprises-attente.component';
>>>>>>> ff2a563a4f16a2a9099dcab14f7dd7d99650a817


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
    CompteService
  ],
  declarations: [EtudiantsComponent, EnseignantsComponent, EntreprisesComponent, StagesValidesComponent, StagesProposesComponent, EntreprisesAttenteComponent]
})
export class ListesModule { }
