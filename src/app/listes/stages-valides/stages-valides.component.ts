import { Component, OnInit } from '@angular/core';
import { Stage } from 'app/Entities/Stage/stage';
import { StageService } from 'app/Entities/Stage/stage.service';


@Component({
  selector: 'app-stages-valides',
  templateUrl: './stages-valides.component.html',
  styleUrls: ['./stages-valides.component.scss']
})
export class StagesValidesComponent {
  stages :any;
  statusCode: number;
  constructor(private stageService: StageService) {
  }
  
  ngOnInit(): void {
    this.getStagePub();
} 

getStagePub() {
    this.stageService.getStagePub().subscribe(
            data => this.stages = data,
            errorCode =>  this.statusCode = errorCode);  
            console.log('stagesPub'); 
}
}