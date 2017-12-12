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
  <body onload="window.print();window.close()">`+{printContents}+`</body>
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