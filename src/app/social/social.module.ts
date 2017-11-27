import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialComponent } from './social.component';
import { SocialRoutes } from './social.routing';
import { EtudiantService } from 'app/Entities/Etudiant/etudiant.service';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SocialRoutes), NgbProgressbarModule, NgbTabsetModule,FormsModule,ReactiveFormsModule],
  providers: [EtudiantService],
  declarations: [SocialComponent]
})

export class SocialModule {}
