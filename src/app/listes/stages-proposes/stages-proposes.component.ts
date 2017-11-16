import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages-proposes',
  templateUrl: './stages-proposes.component.html',
  styleUrls: ['./stages-proposes.component.scss']
})
export class StagesProposesComponent{
  stages = [
    {
      'sujet_stage': 'Gestion de stages',
      'desc_stage': 'Application multiplatforme consiste a ...',
      'date_deb': '15/11/2017',
      'date_fin': '15/01/2018',
      'nom_ent': 'W Corp.'
    },
    {
      'sujet_stage': 'Gestion de location',
      'desc_stage': 'Application Android',
      'date_deb': '16/11/2017',
      'date_fin': '15/02/2018',
      'nom_ent': 'Telnet'
    }
  ];
}