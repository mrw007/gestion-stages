import { Component, OnInit } from '@angular/core';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-pfe-proposes',
  templateUrl: './pfe-proposes.component.html',
  styleUrls: ['./pfe-proposes.component.scss']
})
export class PfeProposesComponent implements OnInit {

  pfes: any;
  statusCode: number;
  constructor(private pfeService: PfeService, private router: Router, private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.getPfeProp();
  }

  getPfeProp() {
    this.pfeService.getPfeProp().subscribe(
      data => this.pfes = data,
      errorCode => this.statusCode = errorCode);

  }
  accepter(object): void {
    this.pfeService.updatePfeValid(object.id).subscribe(successCode => {
      this.statusCode = successCode;
      this.alertService.success("Pfe est accepté");
      this.router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() =>
        this.router.navigateByUrl("/listes/pfe_proposes"));
    },
      errorCode => this.statusCode = errorCode
    );
  }
  refuser(object): void {
    this.pfeService.deletePfe(object.id).subscribe(successCode => {
      this.statusCode = successCode;
      this.alertService.danger("Pfe est refusé");
      this.router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() =>
        this.router.navigateByUrl("/listes/pfe_proposes"));
    },
      errorCode => this.statusCode = errorCode
    );
  }

}