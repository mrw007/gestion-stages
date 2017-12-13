import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
import { Pfe } from 'app/Entities/Pfe/pfe';
@Component({
  selector: 'app-pfe-proposes-ent',
  templateUrl: './pfe-proposes-ent.component.html',
  styleUrls: ['./pfe-proposes-ent.component.scss']
})
export class PfeProposesEntComponent implements OnInit {
  id_prop: any;
  nPfe: Pfe;
  propid: any;
  pfe: Pfe;
  pfes: any;
  statusCode: number;
  id: any;
  closeResult: string;
  message: string = "Etes-vous sûr de supprimer ce sujet?";
  public PfeForm: FormGroup;

  sujet_pfe: string = '';
  desc_pfe: string = '';
  date_deb: Date;
  date_fin: Date;
  constructor(private pfeService: PfeService, private alertService: AlertService, private router: Router, private modalService: NgbModal) {

    this.PfeForm = new FormGroup({
      sujet_pfe: new FormControl(),
      desc_pfe: new FormControl(),
      date_deb: new FormControl(),
      date_fin: new FormControl(),
      id: new FormControl(),
      id_prop: new FormControl()

    });
  }

  ngOnInit(): void {
    let user = JSON.parse(sessionStorage.getItem('user'));

    this.id = user.id;
    this.getPfeProp(user.id);
  }

  getPfeProp(id) {
    this.pfeService.getPfeByIdProp(id).subscribe(
      data => {
        this.pfes = data;
      },
      errorCode => this.statusCode = errorCode);

  }
  deletePfe(id) {
    this.id = id;
    this.pfeService.deletePfe(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success('Pfe Supprimé');
        this.router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() =>
          this.router.navigateByUrl("/listes/pfes_proposes_ent"));
      },
      errorCode => this.statusCode = errorCode
      );
  }
  updatePfe(post) {
    this.sujet_pfe = post.sujet_pfe;
    this.desc_pfe = post.desc_pfe;
    this.date_deb = post.date_deb;
    this.date_fin = post.date_fin;
    this.id = post.id;
    this.id_prop = post.propid;
    this.pfe = new Pfe(post.id, post.sujet_pfe, post.desc_pfe, post.date_deb, post.date_fin, this.id_prop, 0);
    if (post.date_deb > post.date_fin) {
      this.alertService.warning("Vérifier les dates");
    }
    else {
      this.pfeService.updatePfe(this.pfe).subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success("Votre proposition a été modifiée avec succès");
        this.router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() =>
          this.router.navigateByUrl("/listes/pfe_proposes_ent"));
      },
        errorCode => {
          this.statusCode = errorCode;
          this.alertService.danger("Vérifier vos champs");
        }

      );
      console.log("submit", this.pfe);
    }
  }
  open(content, id) {
    this.pfeService.getPfeByID(id).subscribe(
      data => {
        this.nPfe = data;
        console.log(this.nPfe);
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      },
      errorCode => this.statusCode = errorCode);
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

}