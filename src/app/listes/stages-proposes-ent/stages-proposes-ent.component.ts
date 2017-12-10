import { Component, OnInit } from '@angular/core';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Stage } from 'app/Entities/Stage/stage';
import { AlertService } from 'ngx-alerts';
@Component({
  selector: 'app-stages-proposes-ent',
  templateUrl: './stages-proposes-ent.component.html',
  styleUrls: ['./stages-proposes-ent.component.scss']
})
export class StagesProposesEntComponent implements OnInit {
  stages: any;
  statusCode: number;
  id: any;
  constructor(private stageService: StageService,private alertService: AlertService) {
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
        this.alertService.success('Stage Supprimé')
      },
      errorCode => this.statusCode = errorCode
      );

 

  }
}