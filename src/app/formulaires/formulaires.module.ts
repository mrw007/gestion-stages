import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposerStageComponent } from './proposer-stage/proposer-stage.component';
import { FormulairesRoutes } from './formulaires.routing';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageService } from 'app/Entities/Stage/stage.service';
@NgModule({
  imports: [
    RouterModule.forChild(FormulairesRoutes),
    CommonModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StageService
  ],
  declarations: [ProposerStageComponent]
})
export class FormulairesModule { }
