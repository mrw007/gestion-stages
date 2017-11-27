import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Etudiant } from 'app/Entities/Etudiant/etudiant';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  ngOnInit(): void {
    this.getSession();
  }
  session:any;
  getSession() {
    let userC=JSON.parse(sessionStorage.getItem('user'));
    console.log(userC);
    this.session=userC;
  }

  public modif_pass: FormGroup;
  public EtudiantForm: FormGroup;

  etudiant={
        'cin': '11058679',
        'nom': 'Kallel', 
        'prenom': 'Marwen',
        'tel': '55 679 511', 
        'email': 'marouankallel@gmail.com', 
        'cycle_etude': 'Ingénieurie', 
        'date_ness':'1994-06-13',
        'niveau_etude': '2eme'};
//init General Form Values
post:any;  
nom: string='';
prenom: string='';
cin: string='';
email: string='';
pass:string='';
comf_pass: string='';

//init Etudiant Form Values

dateNess: Date;
numInscrit: string='';
cy_etud: string='';
niv_etud: string='';

  closeResult: string;
  
  constructor(private fb: FormBuilder, private router: Router, private modalService: NgbModal) {
    
        this.modif_pass = new FormGroup({
          pass:new FormControl(),
          comf_pass: new FormControl()
        });
        this.EtudiantForm = new FormGroup({
          nom: new FormControl(),
          prenom: new FormControl(),
          cin: new FormControl(),
          email: new FormControl(),
          pass:new FormControl(),
          comf_pass: new FormControl(),
          dateNess:  new FormControl(),
          numInscrit:  new FormControl(),
          cy_etud:  new FormControl(),
          niv_etud:  new FormControl(),
        });
      }
      onModif_pass(post)
      {
        this.pass =post.pass;
        this.comf_pass = post.comf_pass;
      //test
        console.log("modif pass", post);  
      }
      open(content) {
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
          return  `with: ${reason}`;
        }
}
submitEtudiant(post)
{
  this.nom = post.nom;
  this.prenom = post.prenom;
  this.cin = post.cin;
  this.email = post.email;
  this.pass =post.pass;
  this.comf_pass = post.comf_pass;
  this.dateNess = post.dateNess;
  this.numInscrit = post.numInscrit;
  this.cy_etud = post.cy_etud;
  this.niv_etud = post.niv_etud;

 //testing forms do not delete! 

 console.log("submitEtudiant", post);  

}
}

