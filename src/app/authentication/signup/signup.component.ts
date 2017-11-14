import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {FormsModule} from '@angular/forms';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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

//init Etudiant Form Values

  dateNess: Date;
  numInscrit: string='';
  cy_etud: string='';
  niv_etud: string='';

//init Enseignant Form Values

grade: string='';

//init Entreprise Form Values

nomEntreprise: string='';
telEntreprise: string='';
adresseEntreprise: string='';


  statuses=[
      {name:"Enseignant",value:'enseignant'},
      {name:"Etudiant",value:'etudiant'},
      {name:"Entreprise",value:'entreprise'}   
  ]
  status:string='-1';
  test:string;

  
  constructor(private fb: FormBuilder, private router: Router) {

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

   this.EnseignantForm = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    cin: new FormControl(),
    email: new FormControl(),
    pass:new FormControl(),
    comf_pass: new FormControl(),
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
    this.numInscrit = post.numInscrit;
    this.cy_etud = post.cy_etud;
    this.niv_etud = post.niv_etud;

   //testing forms do not delete! 

   console.log("submitEtudiant", post);  

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
    this.adresseEntreprise = post.adresseEntreprise;

  //testing forms do not delete!
  console.log("submitEntreprise", post);  

  }  
submitEnseignant(post)
  {

    this.nom = post.nom;
    this.prenom = post.prenom;
    this.cin = post.cin;
    this.email = post.email;
    this.pass =post.pass;
    this.comf_pass = post.comf_pass;
    this.grade = post.grade;

  //testing forms do not delete!

    console.log("submitEnseignant", post);
  }  
}
