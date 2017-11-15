import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent {
  users = [
    {
      'nom_ent': 'W Corp.',
      'nom': 'Kerkeni', 
      'prenom': 'Wahib',
      'tel_ent': '(+216) 74 254 613', 
      'fax_ent': '(+216) 74 254 613', 
      'email': 'w.corp@gmail.com', 
      'adresse_ent': 'Route Tunis Km 6 Sakiet Ezzit, Sfax'
    },
    {
      'nom_ent': 'Telnet',
      'nom': 'Haddar', 
      'prenom': 'Med. Ali',
      'tel_ent': '(+216) 74 468 978', 
      'fax_ent': '(+216) 74 345 641', 
      'email': 'telnet@gmail.com', 
      'adresse_ent': 'Bouderière Km 1.5, Sfax'
    }
  ];
}