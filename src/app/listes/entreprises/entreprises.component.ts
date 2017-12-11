import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Entreprise } from 'app/Entities/Entreprise/entreprise';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent {

  constructor(private entrepriseService: EntrepriseService,private alertService: AlertService,private router: Router) {
  }
  
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  entreprises: Entreprise[];
  id: any;
  ngOnInit(): void {
       this.getAllEntreprises();
  } 

  getAllEntreprises() {
       this.entrepriseService.getAllEntreprises("3").subscribe(
               data => this.entreprises = data,
               errorCode =>  this.statusCode = errorCode);  
               console.log('getAllEntreprises'); 
  }
  refEntreprise(id)
  {
    this.id = id;
    this.entrepriseService.deleteEntrepriseById(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success('Stage Supprimé');
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/listes/entreprises"));
      },
      errorCode => this.statusCode = errorCode
      );
  
     console.log("submitEntreprise",  this.statusCode);    

  }  
}
