import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Entreprise } from 'app/Entities/Entreprise/entreprise';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent {
  constructor(private entrepriseService: EntrepriseService) {
  }
  
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  entreprises: Entreprise[];
  
  ngOnInit(): void {
       this.getAllEntreprises();
  } 

  getAllEntreprises() {
       this.entrepriseService.getAllEntreprises().subscribe(
               data => this.entreprises = data,
               errorCode =>  this.statusCode = errorCode);  
               console.log('getAllEntreprises'); 
  }
}

