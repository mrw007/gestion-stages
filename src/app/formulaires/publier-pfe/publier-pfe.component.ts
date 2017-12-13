import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { EntrepriseService } from 'app/Entities/Entreprise/entreprise.service';
import { Entreprise } from 'app/Entities/Entreprise/entreprise';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
import { Pfe } from 'app/Entities/Pfe/pfe';

@Component({
  selector: 'app-publier-pfe',
  templateUrl: './publier-pfe.component.html',
  styleUrls: ['./publier-pfe.component.scss']
})
export class PublierPfeComponent implements OnInit {
  entreprises: Entreprise[];
  prop: any;
  session: any;

  errorMessage: String;
  statusCode: number;

  public PfeForm: FormGroup;
  
  post:any;  
  pfe:any;
  sujet_pfe: string='';
  desc_pfe: string='';
  date_deb:Date;
  date_fin: Date;
  id_ent:number;
  
  constructor(private fb: FormBuilder, private router: Router ,private pfeService: PfeService,private alertService: AlertService,private entrepriseService: EntrepriseService) {
    this.PfeForm = new FormGroup({
      sujet_pfe: new FormControl(),
      desc_pfe: new FormControl(),
      date_deb: new FormControl(),
      date_fin: new FormControl()
    });
  }
  getSession() {
    let userC = JSON.parse(sessionStorage.getItem('user'));
    this.session = userC;
    
  }
  getAllEntreprises() {
    this.entrepriseService.getAllEntreprises("3").subscribe(
            data => this.entreprises = data,
            errorCode =>  this.statusCode = errorCode);  
            console.log('getAllEntreprises'); 
}
  ngOnInit() {
this.getSession();
this.getAllEntreprises();
  }
  onSubmit() {
    this.router.navigate( ['/'] );
  }

  OnsubmitPfe(post)
  {
    this.sujet_pfe = post.sujet_pfe;
    this.desc_pfe = post.desc_pfe;
    this.date_deb = post.date_deb;
    this.date_fin = post.date_fin;
    this.pfe =new Pfe("0",post.sujet_pfe,post.desc_pfe,post.date_deb,post.date_fin,1,0);
    if(post.date_deb>post.date_fin)
    {
        this.alertService.warning("Vérifier les dates");
    }
    else{
    this.pfeService.pubPfe(this.pfe).subscribe(successCode => {
    this.statusCode = successCode;
    this.alertService.success("Votre publication a été soumise avec succès");
    this.router.navigateByUrl("/listes/stages_valides");
  },
  errorCode => {this.statusCode = errorCode;
    this.alertService.danger("Vérifier vos champs");}
    ); 
  }
}
}