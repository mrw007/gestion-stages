import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.scss']
})
export class EnseignantsComponent {
  users = [
    {
      'cin': '11065974',
      'nom': 'Ben Salah', 
      'prenom': 'Ali',
      'tel': '23689754', 
      'email': 'ali@gmail.com', 
      'grade': 'Maitre Assistant'
    },
    {
      'cin': '11067542',
      'nom': 'Gharbi', 
      'prenom': 'Amal',
      'tel': '55195859', 
      'email': 'amal@gmail.com', 
      'grade': 'Maitre Assistante'
    }
  ];
}


