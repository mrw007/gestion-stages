import { Component, OnInit } from '@angular/core';
import { Stage } from 'app/Entities/Stage/stage';
import { StageService } from 'app/Entities/Stage/stage.service';
@Component({
  selector: 'app-stages-proposes',
  templateUrl: './stages-proposes.component.html',
  styleUrls: ['./stages-proposes.component.scss']
})
export class StagesProposesComponent{
  stages :any;
  statusCode: number;
  constructor(private stageService: StageService) {
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
}