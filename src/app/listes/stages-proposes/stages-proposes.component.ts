import { Component, OnInit } from '@angular/core';
import { Stage } from 'app/Entities/Stage/stage';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stages-proposes',
  templateUrl: './stages-proposes.component.html',
  styleUrls: ['./stages-proposes.component.scss']
})
export class StagesProposesComponent{
  stages :any;
  statusCode: number;
  constructor(private stageService: StageService,private router: Router) {
  }
  
  ngOnInit(): void {
    this.getStageProp();
} 

getStageProp() {
    this.stageService.getStageProp().subscribe(
            data => this.stages = data,
            errorCode =>  this.statusCode = errorCode);  
            console.log('stagesProp'); 
}
accepter(object):void {
  this.stageService.updateStageValid(object.id) .subscribe(successCode => {
    this.statusCode = successCode;
    console.log('id',object.id); 
    alert("Stage est accepté");
    this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
    this.router.navigateByUrl("/listes/stages_proposes"));
  },
  errorCode => this.statusCode = errorCode
  );
}
refuser(object):void {
  this.stageService.deleteStage(object.id) .subscribe(successCode => {
    this.statusCode = successCode;
    console.log('id',object.id); 
    alert("Stage est refusé");
    this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
    this.router.navigateByUrl("/listes/stages_proposes"));
  },
  errorCode => this.statusCode = errorCode
  );
}

}