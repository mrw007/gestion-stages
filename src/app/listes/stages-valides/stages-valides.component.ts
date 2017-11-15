import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages-valides',
  templateUrl: './stages-valides.component.html',
  styleUrls: ['./stages-valides.component.scss']
})
export class StagesValidesComponent {
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