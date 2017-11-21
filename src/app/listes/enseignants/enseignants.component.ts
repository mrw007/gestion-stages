import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { Enseignant } from 'app/Entities/Enseignant/enseignant';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.scss']
})
export class EnseignantsComponent {
  constructor(private enseignantService: EnseignantService) {
  }
  
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  enseignants: Enseignant[];
  
  ngOnInit(): void {
       this.getAllEnseignants();
  } 

  getAllEnseignants() {
       this.enseignantService.getAllEnseignants().subscribe(
               data => this.enseignants = data,
               errorCode =>  this.statusCode = errorCode);  
               console.log('getAllEnseignants'); 
  }
}




