import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Etudiant } from 'app/Entities/Etudiant/etudiant';
import { EtudiantService } from 'app/Entities/Etudiant/etudiant.service';
import { Entreprise } from 'app/Entities/Entreprise/entreprise';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Enseignant } from 'app/Entities/Enseignant/enseignant';
import { AlertService } from 'ngx-alerts';
import { CompteService } from 'app/Entities/Compte/compte.service';
import { Compte } from 'app/Entities/Compte/compte';
declare var jquery:any; declare var $ :any;
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  compte: string;
  user: string;
  type: string;

  statusCode: number;
  etudiant: Etudiant;
  session:any;
  session2:any;
  

  ngOnInit(): void {
    this.getSession();
    this.type = sessionStorage.getItem('type');
    switch (this.type) {
      case "0": {
        this.compte = 'admin';
        console.log(this.compte);
        break;
      }
      case "1": {
        this.compte = 'etudiant';
        console.log(this.compte);
        break;
      }
      case "2": {
        this.compte = 'enseignant';
        console.log(this.compte);
        break;
      }
      case "3": {
        this.compte = 'entreprise';
        console.log(this.compte);
        break;
      }
      case "4": {
        this.compte = 'entreprise_N';
        console.log(this.compte);
        break;
      }
  }
  }
  getSession() {
    let userC = JSON.parse(sessionStorage.getItem('user'));
    console.log(userC);
    this.session = userC;
    this.session2 = userC;
  }

  public modif_pass: FormGroup;
  public EtudiantForm: FormGroup;
  public EnseignantForm: FormGroup;
  public EntrepriseForm: FormGroup;
  enseignant:any;
  entreprise:any;
  cpt:any;


  //init General Form Values
  post: any;
  nom: string = '';
  prenom: string = '';
  cin: string = '';
  email: string = '';
  pass: string = '';
  comf_pass: string = '';
  tel:string ='';
  spec:string ='';
  id:string='';

  //init Etudiant Form Values

  dateNess: Date;
  numInscrit: string = '';
  cy_etud: string = '';
  niv_etud: string = '';
  closeResult: string;

  //init Enseignant Form Values

grade: string='';

//init Entreprise Form Values

nomEntreprise: string='';
telEntreprise: string='';
faxEntreprise: string='';
adresseEntreprise: string='';

  constructor(private fb: FormBuilder, private router: Router, private modalService: NgbModal, private etudiantService: EtudiantService,private enseignantService: EnseignantService,private entrepriseService: EntrepriseService,
    private alertService: AlertService,private compteService:CompteService) {

    this.modif_pass = new FormGroup({
      pass: new FormControl(),
      comf_pass: new FormControl()
    });
    this.EtudiantForm = new FormGroup({
      id: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      cin: new FormControl(),
      email: new FormControl(),
      pass: new FormControl(),
      comf_pass: new FormControl(),
      dateNess: new FormControl(),
      numInscrit: new FormControl(),
      cy_etud: new FormControl(),
      spec: new FormControl(),
      tel: new FormControl(),
      niv_etud: new FormControl(),
    });
    this.EnseignantForm = new FormGroup({
      id: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      cin: new FormControl(),
      email: new FormControl(),
      pass:new FormControl(),
      comf_pass: new FormControl(),
      tel:  new FormControl(),
      grade: new FormControl()
      });
  
      this.EntrepriseForm = new FormGroup({
        id: new FormControl(),
        nom: new FormControl(),
        prenom: new FormControl(),
        cin: new FormControl(),
        email: new FormControl(),
        pass:new FormControl(),
        comf_pass: new FormControl(),
        nomEntreprise: new FormControl(),
        telEntreprise: new FormControl(),
        faxEntreprise: new FormControl(),
        adresseEntreprise: new FormControl()
      });
  
  }
  showAlerts(): void{
    this.alertService.info('this is an info alert');
    this.alertService.danger('this is a danger alert');
    this.alertService.success('this is a success alert');
    this.alertService.warning('this is a warning alert');
    console.log('rr');
}    
  onModif_pass(post) {
    this.pass = post.pass;
    this.comf_pass = post.comf_pass;
    if(post.pass !=post.comf_pass || post.pass==null || post.comf_pass==null){
      this.alertService.danger('Vérifier votre mot de passe');
    }
    else{
    this.cpt=new Compte(this.session.email,post.pass);
    this.compteService.updatePass(this.cpt, this.session.id)
    .subscribe(successCode => {
      sessionStorage.setItem('user', JSON.stringify(this.cpt));
      this.getSession();
       this.alertService.success('Modification a été effectué avec succes');
      this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
      this.router.navigateByUrl("/"));
    },
    errorCode => this.statusCode = errorCode
    );
    console.log("modif pass", post);
  }
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
      return `with: ${reason}`;
    }
  }

  submitEtudiant(post) {
    this.nom = post.nom;
    this.prenom = post.prenom;
    this.cin = post.cin;
    this.email = post.email;
    this.pass = this.session.password;
    this.comf_pass = post.comf_pass;
    this.dateNess = post.dateNess;
    this.numInscrit = post.numInscrit;
    this.cy_etud = post.cy_etud;
    this.niv_etud = post.niv_etud;

    this.etudiant = new Etudiant(post.id, post.email, this.pass, post.cin, post.nom, post.prenom, post.tel, post.dateNess, post.cy_etud, post.niv_etud, post.spec);
    this.etudiantService.updateEtudiant(this.etudiant)
      .subscribe(successCode => {
        this.statusCode = successCode;
        sessionStorage.setItem('user', JSON.stringify(this.etudiant));
        this.getSession();
        //location.reload();
         //this.alertService.success("Modification a été effectué avec succes");
         this.alertService.success('Modification a été effectué avec succes');
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/"));
      },
      errorCode => this.statusCode = errorCode
      );
    console.log("modification", this.etudiant);
  }

  submitEntreprise(post)
  {

    this.nom = post.nom;
    this.prenom = post.prenom;
    this.cin = post.cin;
    this.email = post.email;
    this.pass =this.session.password;
    this.comf_pass = post.comf_pass;
    this.nomEntreprise = post.nomEntreprise;
    this.telEntreprise = post.telEntreprise;
    this.faxEntreprise = post.faxEntreprise;
    this.adresseEntreprise = post.adresseEntreprise;

    this.entreprise =new Entreprise( post.id, post.email,this.pass,post.cin,post.nom,post.prenom,post.nomEntreprise,post.telEntreprise,post.faxEntreprise,post.adresseEntreprise);
    console.log("heki entreprise",  this.entreprise); 
    this.entrepriseService.updateEntreprise(this.entreprise)
      .subscribe(successCode => {
        this.statusCode = successCode;
        sessionStorage.setItem('user', JSON.stringify(this.entreprise));
        this.getSession();
        //location.reload();
        alert("Vous changement ont étés enregistrés avec succès");
      
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/"));
       
      },
      errorCode => this.statusCode = errorCode
      );
  
     console.log("submitEntreprise",  this.statusCode);    

  }  
submitEnseignant(post)
  {

    this.nom = post.nom;
    this.prenom = post.prenom;
    this.cin = post.cin;
    this.email = post.email;
    this.pass =this.session.password;
    this.comf_pass = post.comf_pass;
    this.tel = post.tel;
    this.grade = post.grade;

    this.enseignant = new Enseignant (post.id, post.email,this.pass,post.cin,post.nom,post.prenom,post.tel,post.grade);
    console.log("heka enseignant", this.enseignant); 
    this.enseignantService.updateEnseignant(this.enseignant)
      .subscribe(successCode => {
        this.statusCode = successCode;
        sessionStorage.setItem('user', JSON.stringify(this.enseignant));
        this.getSession();
        //location.reload();
        alert("Vous changement ont étés enregistrés avec succès");
      
        this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl("/"));
      },
      errorCode => this.statusCode = errorCode
      );
  
     console.log("submitEnseignant",  this.statusCode);  
  }  


  success(message: string) { 
    this.alertService.success(message);
}

}





