import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import { EtudiantService } from 'app/Entities/Etudiant/etudiant.service';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Etudiant } from 'app/Entities/Etudiant/etudiant';
import { Enseignant } from 'app/Entities/Enseignant/enseignant';
import { Entreprise } from 'app/Entities/Entreprise/entreprise';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage: String;
  etudiant:any;
  enseignant:any;
  entreprise:any;
  statusCode: number;
// init formGroups

  public EtudiantForm: FormGroup;
  public EnseignantForm: FormGroup;
  public EntrepriseForm: FormGroup;

//init General Form Values
  post:any;  
  nom: string='';
  prenom: string='';
  cin: string='';
  email: string='';
  pass:string='';
  comf_pass: string='';
  tel:string='';

//init Etudiant Form Values

  dateNess: Date;
  cy_etud: string='';
  niv_etud: string='';
  spec:string='';

//init Enseignant Form Values

grade: string='';

//init Entreprise Form Values

nomEntreprise: string='';
telEntreprise: string='';
faxEntreprise: string='';
adresseEntreprise: string='';


  statuses=[
      {name:"Enseignant",value:'enseignant'},
      {name:"Etudiant",value:'etudiant'},
      {name:"Entreprise",value:'entreprise'}   
  ]
  status:string='-1';
  test:string;

  
  constructor(private fb: FormBuilder, private router: Router ,private etudiantService: EtudiantService,private enseignantService: EnseignantService,private entrepriseService: EntrepriseService) {

    this.EtudiantForm = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      cin: new FormControl(),
      email: new FormControl(),
      pass:new FormControl(),
      comf_pass: new FormControl(),
      dateNess:  new FormControl(),
      cy_etud:  new FormControl(),
      tel:  new FormControl(),
      spec:  new FormControl(),
      niv_etud:  new FormControl(),
    });

   this.EnseignantForm = new FormGroup({
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

  ngOnInit() {

  }

  onSubmit() {
    this.router.navigate( ['/'] );
  }
print()
{

  console.log("Status",this.status);
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
    this.cy_etud = post.cy_etud;
    this.spec = post.spec;
    this.tel = post.tel;
    this.niv_etud = post.niv_etud;

  this.etudiant =new Etudiant( "0", post.email,post.pass,post.cin,post.nom,post.prenom,post.tel,post.dateNess,post.cy_etud,post.niv_etud,post.spec);
  console.log("heka etudiant",  this.etudiant); 
  this.etudiantService.createEtudiant(this.etudiant)
    .subscribe(successCode => {
      this.statusCode = successCode;
     
    },
    errorCode => this.statusCode = errorCode
    );

   console.log("submitEtudiant",  this.statusCode);  

  }
submitEntreprise(post)
  {

    this.nom = post.nom;
    this.prenom = post.prenom;
    this.cin = post.cin;
    this.email = post.email;
    this.pass =post.pass;
    this.comf_pass = post.comf_pass;
    this.nomEntreprise = post.nomEntreprise;
    this.telEntreprise = post.telEntreprsie;
    this.faxEntreprise = post.faxEntreprsie;
    this.adresseEntreprise = post.adresseEntreprise;

    this.entreprise =new Entreprise( "0", post.email,post.pass,post.cin,post.nom,post.prenom,post.nomEntreprise,post.telEntreprsie,post.faxEntreprise,post.adresseEntreprise);
    console.log("heki entreprise",  this.entreprise); 
    this.entrepriseService.createEntreprise(this.entreprise)
      .subscribe(successCode => {
        this.statusCode = successCode;
       
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
    this.pass =post.pass;
    this.comf_pass = post.comf_pass;
    this.tel = post.tel;
    this.grade = post.grade;

    this.enseignant =new Enseignant( "0", post.email,post.pass,post.cin,post.nom,post.prenom,post.tel,post.grade);
    console.log("heka enseignant",  this.enseignant); 
    this.enseignantService.createEnseignant(this.enseignant)
      .subscribe(successCode => {
        this.statusCode = successCode;
       
      },
      errorCode => this.statusCode = errorCode
      );
  
     console.log("submitEnseignant",  this.statusCode);  
  }  
}
