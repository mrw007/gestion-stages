import { Component, OnInit } from '@angular/core';
import { Stage } from 'app/Entities/Stage/stage';
import { StageService } from 'app/Entities/Stage/stage.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stages-valides',
  templateUrl: './stages-valides.component.html',
  styleUrls: ['./stages-valides.component.scss']
})
export class StagesValidesComponent {
  dateString: string='';
  today: any;
  session: any;
  info: any;
  stages :any;
  statusCode: number;
  closeResult: string;
  constructor(private stageService: StageService, private router: Router, private modalService: NgbModal) {
  }
  
  ngOnInit(): void {
    this.getStagePub();
    this.getSession();
    this.today = new Date();
    // Get the month, day, and year.  
this.dateString += this.today.getDate() + "/";  
this.dateString += (this.today.getMonth() + 1) + "/";  
this.dateString += this.today.getFullYear();
    console.log(this.dateString);
    
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
  <!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>demande_stage</title>
      <style type="text/css">
          * {
              margin: 0;
              padding: 0;
              text-indent: 0;
          }
  
          h2 {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: bold;
              text-decoration: none;
              font-size: 10.5pt;
          }
  
          h1 {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: bold;
              text-decoration: none;
              font-size: 15pt;
          }
  
          h4 {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: bold;
              text-decoration: none;
              font-size: 9.5pt;
          }
  
          .p,
          p {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 9.5pt;
              margin: 0pt;
          }
  
          .s1 {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 10pt;
          }
  
          .h3,
          h3 {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: bold;
              text-decoration: none;
              font-size: 10pt;
          }
  
          .a {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: normal;
              text-decoration: none;
              font-size: 9.5pt;
          }
  
          .s2 {
              color: black;
              font-family: Arial, sans-serif;
              font-style: normal;
              font-weight: bold;
              text-decoration: none;
              font-size: 10pt;
          }
      </style>
  </head>
  
  <body onload="window.print();window.close()">
      <p style="padding-left: 26pt;text-indent: 0pt;text-align: left;">
          <span>
              <img width="700" height="84" alt="image" src="/assets/images/demande_stage/Image_001.jpg" />
          </span>
      </p>
      <p style="text-indent: 0pt;text-align: left;">
          <br/>
      </p>
      <h2 style="padding-top: 4pt;text-indent: 0pt;text-align: right;">Fait à Sfax le : `+this.dateString+`</h2>
      <p style="text-indent: 0pt;text-align: left;">
          <br/>
      </p>
      <h1 style="padding-left: 169pt;text-indent: 0pt;line-height: 17pt;text-align: center;">A L&#39;attention du Directeur</h1>
      <h1 style="padding-left: 169pt;text-indent: 0pt;line-height: 17pt;text-align: center;">de la Formation de la Société `+this.info.nom_ent+`</h1>
      <p style="text-indent: 0pt;text-align: left;">
          <br/>
      </p>
      <h4 style="padding-top: 4pt;padding-left: 6pt;text-indent: 0pt;text-align: left;">Objet
          <span class="p">: </span>Demande de Stage</h4>
      <p style="text-indent: 0pt;text-align: left;">
          <br/>
      </p>
      <p style="padding-top: 7pt;padding-left: 6pt;text-indent: 0pt;line-height: 94%;text-align: left;">L’Institut Supérieur d’informatique et de Multimédia de Sfax assure depuis un certain nombre d&#39;années plusieurs formations. Dans le cadre de l&#39;ouverture de notre institution universitaire sur son environnement socio-économique,
          <span class="s1">nous encourageons nos étudiants à s’initier à la vie professionnelle et ce, en effectuant un stage facultatif d’une
              durée d’un mois.</span>
      </p>
      <p style="text-indent: 0pt;text-align: left;">
          <br/>
      </p>
      <p style="padding-top: 7pt;padding-left: 6pt;text-indent: 0pt;line-height: 94%;text-align: left;">Nous venons donc, par la présente, vous demander de bien vouloir accueillir, au sein de votre entreprise, l&#39;étudiant(e)
          <b>`+ this.session.nom+` `+this.session.prenom+` </b>inscrit(e) en
          <b>`+this.session.niveau_etude+` </b>
          <span class="h3">année `+this.session.cycle_etude+`</span>.</p>
      <p style="text-indent: 0pt;text-align: left;">
          <br/>
      </p>
      <p style="padding-top: 7pt;padding-left: 6pt;text-indent: 0pt;text-align: justify;">
          <a href="mailto:direction.stages.isimsf@gmail.com" class="a" target="_blank">Nous vous prions, en cas de réponse positive, de bien vouloir remplir la fiche de stage ci-dessous et la remettre
              à l&#39;étudiant(e) ou la retourner par email à l&#39;adresse suivante : </a>direction.stages.isimsf@gmail.com,
          et ce afin de préparer la lettre d&#39;affectation du stagiaire.</p>
      <p style="text-indent: 0pt;text-align: left;">
          <br/>
      </p>
      <p style="padding-left: 6pt;text-indent: 0pt;text-align: left;">En vous remerciant pour votre collaboration, nous vous adressons, Madame, Monsieur, l&#39;expression de notre respect.</p>
      <p
          style="text-indent: 0pt;text-align: left;">
          <br/>
          </p>
          <p class="s1" style="padding-top: 7pt;padding-left: 6pt;text-indent: 0pt;text-align: left;">...........................................................................................................................................................................................................</p>
          <h4
              style="padding-top: 9pt;padding-left: 169pt;text-indent: 0pt;line-height: 11pt;text-align: center;">Fiche de Stage</h4>
              <h4 style="padding-left: 169pt;text-indent: 0pt;text-align: center;">(A remplir avec la plus grande précision car ces informations seront utilisées dans toutes les correspondances
                  officielles)</h4>
              <p style="text-indent: 0pt;text-align: left;">
                  <br/>
              </p>
              <table style="border-collapse:collapse;margin-left:6.48pt" cellspacing="0">
                  <tr style="height:18pt">
                      <td style="width:565pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                          colspan="3">
                          <p class="s2" style="padding-top: 3pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Entreprise : `+this.info.nom_ent+`</p>
                      </td>
                  </tr>
                  <tr style="height:18pt">
                      <td style="width:171pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt">
                          <p class="s2" style="padding-top: 2pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Stage prévu du `+this.info.date_deb+`</p>
                      </td>
                      <td style="width:109pt;border-top-style:solid;border-top-width:2pt;border-bottom-style:solid;border-bottom-width:2pt">
                          <p class="s2" style="padding-top: 2pt;padding-right: 2pt;text-indent: 0pt;text-align: right;">au `+this.info.date_fin+`</p>
                      </td>
                      <td style="width:285pt;border-top-style:solid;border-top-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                          <p style="text-indent: 0pt;text-align: left;">
                              <br/>
                          </p>
                      </td>
                  </tr>
                  <tr style="height:18pt">
                      <td style="width:565pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                          colspan="3">
                          <p class="s2" style="padding-top: 2pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">Adresse : `+this.info.adresse_ent+`</p>
                      </td>
                  </tr>
                  <tr style="height:18pt">
                      <td style="width:285pt;border-top-style:solid;border-top-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                          <p class="s2" style="padding-top: 2pt;padding-left: 3pt;text-indent: 0pt;text-align: left;">Tél : `+this.info.tel_ent+`</p>
                      </td>
                  </tr>
              </table>
              <p style="text-indent: 0pt;text-align: left;">
                  <br/>
              </p>
              <p style="text-indent: 0pt;text-align: left;">
                  <br/>
              </p>
              <p style="text-indent: 0pt;text-align: left;">
                  <span>
                      <img width="250" height="162" alt="image" src="/assets/images/demande_stage/Image_002.jpg" />
                  </span>
              </p>
              <h3 style="padding-left: 8pt;text-indent: 0pt;line-height: 94%;text-align: center;">Signature et cachet du Premier Responsable de l&#39;Entreprise</h3>
              <p style="text-indent: 0pt;text-align: left;">
                  <br/>
              </p>
              <p style="padding-left: 26pt;text-indent: 0pt;text-align: left;">
                  <span>
                      <img width="700" height="80" alt="image" src="/assets/images/demande_stage/Image_003.jpg" />
                  </span>
              </p>
  </body>
  
  </html>
    `
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
getSession() {
  let userC = JSON.parse(sessionStorage.getItem('user'));
  console.log(userC);
  this.session = userC;
}
}