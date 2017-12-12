import { Component, OnInit } from '@angular/core';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-pfe-publies',
  templateUrl: './pfe-publies.component.html',
  styleUrls: ['./pfe-publies.component.scss']
})
export class PfePubliesComponent implements OnInit {
  pfes: any;
  statusCode: number;
  constructor(private pfeService: PfeService, private router: Router, private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.getPfePub();
  }

  getPfePub() {
    this.pfeService.getPfePub().subscribe(
      data => this.pfes = data,
      errorCode => this.statusCode = errorCode);

  }

}
