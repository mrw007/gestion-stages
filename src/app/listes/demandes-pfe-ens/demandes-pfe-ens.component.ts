import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { affectationPfe } from 'app/Entities/Affectation_pfe/affectationPfe';
import { affectationPfeService } from 'app/Entities/Affectation_pfe/affectationPfe.service';


@Component({
  selector: 'app-demandes-pfe-ens',
  templateUrl: './demandes-pfe-ens.component.html',
  styleUrls: ['./demandes-pfe-ens.component.scss']
})
export class DemandesPfeEnsComponent implements OnInit {
  constructor(private router: Router,private alertService: AlertService,private affectationPfeService: affectationPfeService) {
  }

  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  affectations: affectationPfe[];
  id: any;
  ngOnInit(): void {
    this.getAllDemandes();
  }

  getAllDemandes() {
    this.affectationPfeService.getAffPfeDemandes(0,0).subscribe(
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
  accDemande(id) {
    this.id = id;
    this.affectationPfeService.acceptAffPfeEns(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success('Demande acceptée');
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/listes/demandes_pfe_ens"));
      },
      errorCode => this.statusCode = errorCode
      );
  }
  refDemande(id) {
    this.id = id;
    this.affectationPfeService.deleteAffPfe(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.danger('Demande refusée');
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/listes/demandes_pfe_ens"));
      },
      errorCode => this.statusCode = errorCode
      );

  }
}
