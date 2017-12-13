import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PfeService } from 'app/Entities/Pfe/pfe.service';
import { AlertService } from 'ngx-alerts';
import { Pfe } from 'app/Entities/Pfe/pfe';

@Component({
  selector: 'app-proposer-pfe',
  templateUrl: './proposer-pfe.component.html',
  styleUrls: ['./proposer-pfe.component.scss']
})
export class ProposerPfeComponent implements OnInit {
  session: any;
  prop: any;
  errorMessage: String;
  statusCode: number;

  public PfeForm: FormGroup;

  post: any;
  pfe: any;
  sujet_pfe: string = '';
  desc_pfe: string = '';
  date_deb: Date;
  date_fin: Date;

  constructor(private fb: FormBuilder, private router: Router, private pfeService: PfeService, private alertService: AlertService) {
    this.PfeForm = new FormGroup({
      sujet_pfe: new FormControl(),
      desc_pfe: new FormControl(),
      date_deb: new FormControl(),
      date_fin: new FormControl(),

    });
  }

  getSession() {
    let userC = JSON.parse(sessionStorage.getItem('user'));
    console.log(userC);
    this.session = userC;

  }
  ngOnInit() {
    this.getSession();

  }
  onSubmit() {
    this.router.navigate(['/']);
  }

  OnsubmitPfe(post) {
    this.sujet_pfe = post.sujet_pfe;
    this.desc_pfe = post.desc_pfe;
    this.date_deb = post.date_deb;
    this.date_fin = post.date_fin;
    this.prop = this.session.id;
    this.pfe = new Pfe("0", post.sujet_pfe, post.desc_pfe, post.date_deb, post.date_fin, this.prop, 0);
    if (post.date_deb > post.date_fin) {
      this.alertService.warning("Vérifier les dates");
    }
    else {
      this.pfeService.propPfe(this.pfe).subscribe(successCode => {
        this.statusCode = successCode;
        this.alertService.success("Votre proposition a été soumise avec succès");
        this.router.navigateByUrl("/listes/pfe_proposes_ent");
      },
        errorCode => {
          this.statusCode = errorCode;
          this.alertService.danger("Vérifier vos champs");
        }

      );
      console.log("submit", this.pfe);

    }
  }
}
