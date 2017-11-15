import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { ListesRoutes } from './listes.routing';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ListesRoutes),
    NgbTooltipModule
  ],
  declarations: [EtudiantsComponent, EnseignantsComponent, EntreprisesComponent]
})
export class ListesModule { }
