import { Component, OnInit } from '@angular/core';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Stage } from 'app/Entities/Stage/stage';
@Component({
  selector: 'app-stages-proposes-ent',
  templateUrl: './stages-proposes-ent.component.html',
  styleUrls: ['./stages-proposes-ent.component.scss']
})
export class StagesProposesEntComponent implements OnInit {
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