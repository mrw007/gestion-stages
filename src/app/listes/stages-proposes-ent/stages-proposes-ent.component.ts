import { Component, OnInit } from '@angular/core';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Stage } from 'app/Entities/Stage/stage';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-stages-proposes-ent',
  templateUrl: './stages-proposes-ent.component.html',
  styleUrls: ['./stages-proposes-ent.component.scss']
})
export class StagesProposesEntComponent implements OnInit {
  id_prop: any;
  nStage: Stage;
  propid: any;
  stage: Stage;
  stages: any;
  statusCode: number;
  id: any;
  closeResult: string;
  message: string = "Etes-vous sûr de supprimer ce sujet?";
  public StageForm: FormGroup;

  sujet_stage: string = '';
  desc_stage: string = '';
  date_deb: Date;
  date_fin: Date;
  constructor(private stageService: StageService, private alertService: AlertService, private router: Router, private modalService: NgbModal) {

    this.StageForm = new FormGroup({
      sujet_stage: new FormControl(),
      desc_stage: new FormControl(),
      date_deb: new FormControl(),
      date_fin: new FormControl(),
      id: new FormControl(),
      id_prop: new FormControl()

    });
  }

  ngOnInit(): void {
    let user = JSON.parse(sessionStorage.getItem('user'));

    this.id = user.id;
    this.getStageProp(user.id);
  }

  getStageProp(id) {
    this.stageService.getStageByIdProp(id).subscribe(
      data => {
        this.stages = data;
      },
      errorCode => this.statusCode = errorCode);

  }
  deleteStage(id) {
    this.id = id;
    this.stageService.deleteStage(id)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success('Stage Supprimé');
        this.router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() =>
          this.router.navigateByUrl("/listes/stages_proposes_ent"));
      },
      errorCode => this.statusCode = errorCode
      );
  }
  updateStage(post) {
    this.sujet_stage = post.sujet_stage;
    this.desc_stage = post.desc_stage;
    this.date_deb = post.date_deb;
    this.date_fin = post.date_fin;
    this.id = post.id;
    this.id_prop = post.propid;
    this.stage = new Stage(post.id, post.sujet_stage, post.desc_stage, post.date_deb, post.date_fin, this.id_prop, 0);
    if (post.date_deb > post.date_fin) {
      this.alertService.warning("Vérifier les dates");
    }
    else {
      this.stageService.updateStage(this.stage).subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success("Votre proposition a été modifiée avec succès");
        this.router.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() =>
        this.router.navigateByUrl("/listes/stages_proposes_ent"));
      },
        errorCode => {
          this.statusCode = errorCode;
          this.alertService.danger("Vérifier vos champs");
        }

      );
      console.log("submit", this.stage);
    }
  }
  open(content, id) {
    this.stageService.getStageByID(id).subscribe(
      data => {
        this.nStage = data;
        console.log(this.nStage);
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