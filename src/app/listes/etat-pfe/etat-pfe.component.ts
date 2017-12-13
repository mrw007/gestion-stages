import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { affectationPfe } from 'app/Entities/Affectation_pfe/affectationPfe';
import { affectationPfeService } from 'app/Entities/Affectation_pfe/affectationPfe.service';

@Component({
  selector: 'app-etat-pfe',
  templateUrl: './etat-pfe.component.html',
  styleUrls: ['./etat-pfe.component.scss']
})
export class EtatPfeComponent implements OnInit {
  id_etudiant: any;
  
  
    constructor(private router: Router,private alertService: AlertService,private affectationPfeService: affectationPfeService) {
    }
  
    statusCode: number;
    requestProcessing = false;
    articleIdToUpdate = null;
    processValidation = false;
    affectations: affectationPfe[];
    id: any;
    ngOnInit(): void {
      let user = JSON.parse(sessionStorage.getItem('user'));
      this.id_etudiant = user.id;
      this.getAllDemandes(this.id_etudiant);
    }
  
    getAllDemandes(id) {
      this.affectationPfeService.getAffPfeByIdEtud(id).subscribe(
        data => {this.affectations = data;
          for (let i of this.affectations) {
            this.affectationPfeService.getAffPfeDemandes(0,0).subscribe(
              data => {this.affectations = data;
                
              },
              errorCode => this.statusCode = errorCode);
        }
        },
        errorCode => this.statusCode = errorCode);
    }
    refDemande(id) {
      this.id = id;
      this.affectationPfeService.deleteAffPfe(id)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.alertService.danger('Demande Supprimé');
          this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
          this.router.navigateByUrl("/listes/etat_pfe"));
        },
        errorCode => this.statusCode = errorCode
        );
  
    }
  }
  