import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Stage } from 'app/Entities/Stage/stage';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-proposer-stage',
  templateUrl: './proposer-stage.component.html',
  styleUrls: ['./proposer-stage.component.scss']
})
export class ProposerStageComponent implements OnInit {
  session: any;
  prop: any;
  errorMessage: String;
  statusCode: number;

  public StageForm: FormGroup;

  post: any;
  stage: any;
  sujet_stage: string = '';
  desc_stage: string = '';
  date_deb: Date;
  date_fin: Date;

  constructor(private fb: FormBuilder, private router: Router, private stageService: StageService, private alertService: AlertService) {
    this.StageForm = new FormGroup({
      sujet_stage: new FormControl(),
      desc_stage: new FormControl(),
      date_deb: new FormControl(),
      date_fin: new FormControl(),

    });
  }

  getSession() {
    let userC = JSON.parse(sessionStorage.getItem('user'));
    console.log(userC);
    this.session = userC;

  }
  ngOnInit() {
    this.getSession();

  }
  onSubmit() {
    this.router.navigate(['/']);
  }

  OnsubmitStage(post) {
    this.sujet_stage = post.sujet_stage;
    this.desc_stage = post.desc_stage;
    this.date_deb = post.date_deb;
    this.date_fin = post.date_fin;
    this.prop = this.session.id;
    this.stage = new Stage("0", post.sujet_stage, post.desc_stage, post.date_deb, post.date_fin, this.prop, 0);
    if (post.date_deb > post.date_fin) {
      this.alertService.warning("Vérifier les dates");
    }
    else {
      this.stageService.propStage(this.stage).subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success("Votre proposition a été soumise avec succès");
        this.router.navigateByUrl("/listes/stages_proposes_ent");
      },
        errorCode => {
        this.statusCode = errorCode;
          this.alertService.danger("Vérifier vos champs");
        }

      );
      console.log("submit", this.stage);

    }
  }
}
