import { Component, OnInit } from '@angular/core';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pfe-publies',
  templateUrl: './pfe-publies.component.html',
  styleUrls: ['./pfe-publies.component.scss']
})
export class PfePubliesComponent implements OnInit {
  id_etud: any;
  id: any;
  id_etudiant: any;
  id_pfe: any;
  id_ens: any;
  DemandeForm: FormGroup;
  enseignants: any;
  closeResult: string;
  info: any;
  pfes: any;
  statusCode: number;
  constructor(private pfeService: PfeService, private router: Router, private alertService: AlertService, private modalService: NgbModal, private enseignantService: EnseignantService) {
    this.DemandeForm = new FormGroup({
      id_ens: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getPfePub();
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.id_etudiant = user.id;
  }

  getPfePub() {
    this.pfeService.getPfePub().subscribe(
      data => this.pfes = data,
      errorCode => this.statusCode = errorCode);

  }
  getAllEnseignants() {
    this.enseignantService.getAllEnseignants().subscribe(
      data => {
        this.enseignants = data;
      },
      errorCode => this.statusCode = errorCode);

  }
  open(content, object) {
    this.info = object;
    this.getAllEnseignants();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  postDemandePfe(post) {
    this.id_ens = post.id_ens;
    this.id_pfe = this.info.id;
    this.id_etud = this.id_etudiant;
    //testing
    console.log(this.id_ens, " ", this.id_pfe);
  }
}
