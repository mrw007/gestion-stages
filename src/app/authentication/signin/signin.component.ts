import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { CompteService } from 'app/Entities/Compte/compte.service';
import { Compte } from 'app/Entities/Compte/compte';
import { forEach } from '@angular/router/src/utils/collection';
import { verifCompte } from 'app/Entities/Compte/verifCompte';
import { EtudiantService } from 'app/Entities/Etudiant/etudiant.service';
import { EnseignantService } from 'app/Entities/Enseignant/enseignant.service';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Etudiant } from 'app/Entities/Etudiant/etudiant';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  public formSignin: FormGroup;

  //init General Form Values
  post:any;  
  username: string='';
  password: string='';
  

  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  comptes: Compte[];
  compte: any;
  v:verifCompte;
  etudiant:any;
  enseignant:any;
  entreprise:any;
  admin:any;

  constructor(private fb: FormBuilder, private router: Router ,private compteService :CompteService,private etudiantService: EtudiantService,private enseignantService: EnseignantService,private entrepriseService: EntrepriseService) {

  this.formSignin = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
}
  ngOnInit() {
    let user = sessionStorage.getItem('user');
    if (user!=null)
    {
   console.log("etudiant",user);
   this.router.navigateByUrl('/');
  }
  }

  onSubmit() {
    this.router.navigate ( [ '/' ] );
  }
  onSubmitSignin(post){
    this.username = post.username;
    this.password = post.password;
    this.compte=new Compte(post.username,post.password)
    this.verifUser();
    
    
    
  }
  verifUser() {
    this.compteService.verifUser(this.compte).subscribe(
            data => {this.v = data;
              console.log("login", this.v);
              if(this.v.type==0)
              {
                
              }
              else if(this.v.type==1)
              {
                this.getEtudiantById();
              }
              else if(this.v.type==2)
              {
                this.getEnseignantById();
              }
              else if (this.v.type==3 ||this.v.type==4)
              {
                this.getEntrepriseById();
              }},
            errorCode =>  this.statusCode = errorCode);  
  }
  getEtudiantById() {
    this.etudiantService.getEtudiantById(this.v.id).subscribe(
      data => {
                this.etudiant = data;
               // console.log("etudiant", this.etudiant);
               let user = sessionStorage.getItem('user');
               if (user==null)
               {
                sessionStorage.setItem('user', JSON.stringify(this.etudiant));
                console.log("etudiant",sessionStorage.getItem('user'));
               }
               else
               console.log("etudiant",user);
              this.router.navigateByUrl('/');},
      errorCode =>  this.statusCode = errorCode);  
     
  }
  getEnseignantById() {
    this.enseignantService.getEnseignantById(this.v.id).subscribe(
      data => {this.enseignant = data;
        console.log("enseignant", this.enseignant);},
      errorCode =>  this.statusCode = errorCode);  
    
    
  }
  getEntrepriseById() {

    this.entrepriseService.getEntrepriseById(this.v.id).subscribe(
            data => {this.entreprise = data;
              console.log("entreprise", this.entreprise); },
            errorCode =>  this.statusCode = errorCode); 
                 
  }
}
