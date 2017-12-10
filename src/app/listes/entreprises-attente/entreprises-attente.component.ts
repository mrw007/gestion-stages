import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Entreprise } from 'app/Entities/Entreprise/entreprise';
import { AcceptEntreprise } from 'app/Entities/Entreprise/AcceptEntreprise';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-entreprises-attente',
  templateUrl: './entreprises-attente.component.html',
  styleUrls: ['./entreprises-attente.component.scss']
})
export class EntreprisesAttenteComponent implements OnInit {


  constructor(private entrepriseService: EntrepriseService , private router: Router,private alertService: AlertService) {
  }

  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  entreprises: Entreprise[];
  entrepriseAcc: AcceptEntreprise;
  id: any;
  ngOnInit(): void {
    this.getAllEntreprises();
  }

  getAllEntreprises() {
    this.entrepriseService.getAllEntreprises("4").subscribe(
      data => this.entreprises = data,
      errorCode => this.statusCode = errorCode);
  }
  accEntreprise(id) {
    this.id = id;
    this.entrepriseAcc = new AcceptEntreprise(id, 3);
    this.entrepriseService.acceptEntreprise(this.entrepriseAcc)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success('Entreprise accepté');
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/listes/entreprises_attente"));
      },
      errorCode => this.statusCode = errorCode
      );



  }
  refEntreprise(id) {
    this.id = id;
    this.entrepriseService.deleteEntrepriseById(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.danger('Entreprise refusé');
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/listes/entreprises_attente"));
      },
      errorCode => this.statusCode = errorCode
      );

  }
}
