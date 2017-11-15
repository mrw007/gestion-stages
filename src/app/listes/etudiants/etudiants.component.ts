import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent {
  users = [
    {
      'cin': '1105335',
      'nom': 'Issawi', 
      'prenom': 'Saif Eddine',
      'tel': '55145512', 
      'email': 'issawi.saifeddine1993@gmail.com', 
      'cycle_etude': 'Ingénieurie', 
      'niveau_etude': '2'
    },
    {
      'cin': '11058972',
      'nom': 'Ben Atitallah', 
      'prenom': 'Khaoula',
      'tel': '55195859', 
      'email': 'khaoula@gmail.com', 
      'cycle_etude': 'Ingénieurie', 
      'niveau_etude': '2'
    },
    {
      'cin': '11058241',
      'nom': 'Kerkeni', 
      'prenom': 'Wahib',
      'tel': '50858508', 
      'email': 'mr.wahib@gmail.com', 
      'cycle_etude': 'Ingénieurie', 
      'niveau_etude': '2'
    },
    {
      'cin': '11058685',
      'nom': 'Kallel', 
      'prenom': 'Amal',
      'tel': '26718920', 
      'email': 'amal.kallel@gmail.com', 
      'cycle_etude': 'Ingénieurie', 
      'niveau_etude': '2'
    },
    {
      'cin': '11058978',
      'nom': 'Kotti', 
      'prenom': 'Houcem',
      'tel': '58976452', 
      'email': 'kotti.houcem@gmail.com', 
      'cycle_etude': 'Ingénieurie', 
      'niveau_etude': '2'
    }
  ];
}


