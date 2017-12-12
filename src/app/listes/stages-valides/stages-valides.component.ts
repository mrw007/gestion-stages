import { Component, OnInit } from '@angular/core';
import { Stage } from 'app/Entities/Stage/stage';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-stages-valides',
  templateUrl: './stages-valides.component.html',
  styleUrls: ['./stages-valides.component.scss']
})
export class StagesValidesComponent {
  info: any;
  stages :any;
  statusCode: number;
  closeResult: string;
  constructor(private stageService: StageService, private router: Router, private modalService: NgbModal) {
  }
  
  ngOnInit(): void {
    this.getStagePub();
} 

getStagePub() {
    this.stageService.getStagePub().subscribe(
            data => this.stages = data,
            errorCode =>  this.statusCode = errorCode); 
}
print(): void {
  let printContents, popupWin;
  printContents = document.getElementById('print-section').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
    <html>
      <head>
        <title>Print tab</title>
        <style>
        //........Customized style.......
        </style>
      </head>
  <body onload="window.print();window.close()">
  <ng-template #content let-c="close" let-d="dismiss">
  <div class="modal-header">
    <h6 class="modal-title text-uppercase">Informations sur le stage</h6>
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div class="card">
      <div>
        <div class="card-header-text" style="margin-left: 5%;">
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-green text-white icon icon-basic-book-pen"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Sujet</div>
              <div style="color: black;">{{info?.sujet_stage}}</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-blue text-white icon icon-basic-gear"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Description</div>
              <div style="color: black;">{{info?.desc_stage}}</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-cyan text-white icon icon-basic-calendar"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Date Début</div>
              <div style="color: black;">{{info?.date_deb}}</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-red text-white icon icon-basic-calendar"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Date Fin</div>
              <div style="color: black;">{{info?.date_fin}}</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-green text-white icon icon-basic-flag2"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Nom Entreprise</div>
              <div style="color: black;">{{info?.nom_ent}}</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-blue text-white icon icon-basic-smartphone"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Téléphone</div>
              <div style="color: black;">{{info?.tel_ent}}</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-pink text-white icon icon-basic-geolocalize-05"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Adresse</div>
              <div style="color: black;">{{info?.adresse_ent}}</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="mr-3">
              <div class="widget-icon rounded-circle bg-red text-white icon icon-basic-mail"></div>
            </div>
            <div class="mr-3">
              <div class="ff-headers text-color">Email</div>
              <div style="color: black;">{{info?.email}}</div>
            </div>
          </div>
          <br>
        </div>
        <button type="button" class="btn btn-success btn-icon mr-1 mb-1" (click)="print()">
          <i class="icon icon-arrows-check"></i>
          <span>Imprimer</span>
        </button>
      </div>
      
    </div>
  </div>
</ng-template></body>
    </html>`
  );
  popupWin.document.close();
}
open(content,object) {
  this.info=object;    
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
}