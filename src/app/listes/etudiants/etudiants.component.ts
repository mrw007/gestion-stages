import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'app/Entities/Etudiant/etudiant.service';
import { Etudiant } from 'app/Entities/Etudiant/etudiant';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent {

  constructor(private etudiantService: EtudiantService) {
  }

  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;

  etudiants: Etudiant[];
  
  ngOnInit(): void {
       this.getAllEtudiants();
  }   
  getAllEtudiants() {
       this.etudiantService.getAllEtudiants().subscribe(
               data => this.etudiants = data,
               errorCode =>  this.statusCode = errorCode);  
               console.log('getAllEtudiants'); 
  }
}