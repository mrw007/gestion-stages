import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialComponent } from './social.component';
import { SocialRoutes } from './social.routing';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { EtudiantService } from 'app/Entities/Etudiant/etudiant.service';
import { CompteService } from 'app/Entities/Compte/compte.service';
import { AlertService } from 'app/alert/alert.service';


@NgModule({
  imports: [CommonModule, RouterModule.forChild(SocialRoutes), NgbProgressbarModule, NgbTabsetModule, FormsModule, ReactiveFormsModule],
  providers: [EtudiantService,
    EnseignantService,
    EntrepriseService,
    CompteService,
    AlertService],
  declarations: [SocialComponent]
})

export class SocialModule { }
