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

  public form: FormGroup;
  statuses=[
      {name:"Enseignant",value:'enseignant'},
      {name:"Etudiant",value:'etudiant'},
      {name:"Entreprise",value:'entreprise'}   
  ]
  status:string='-1';
  test:string;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group( {
      uname: [null , Validators.compose ( [ Validators.required ] )],
      password: password,
      confirmPassword: confirmPassword
    } );
  }

  onSubmit() {
    this.router.navigate( ['/'] );
  }
print()
{

  console.log("Status",this.status);
}
}
