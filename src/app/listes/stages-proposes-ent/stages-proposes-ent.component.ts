import { Component, OnInit } from '@angular/core';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Stage } from 'app/Entities/Stage/stage';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stages-proposes-ent',
  templateUrl: './stages-proposes-ent.component.html',
  styleUrls: ['./stages-proposes-ent.component.scss']
})
export class StagesProposesEntComponent implements OnInit {
  stages: any;
  statusCode: number;
  id: any;
  message: string ="Etes-vous sûr de supprimer ce sujet?";
  constructor(private stageService: StageService,private alertService: AlertService,private router: Router) {
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
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/listes/stages_proposes_ent"));
      },
      errorCode => this.statusCode = errorCode
      );

 

  }
}