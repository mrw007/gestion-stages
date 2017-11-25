import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { CompteService } from 'app/Entities/Compte/compte.service';
import { Compte } from 'app/Entities/Compte/compte';
import { forEach } from '@angular/router/src/utils/collection';

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

  constructor(private fb: FormBuilder, private router: Router ,private compteService :CompteService) {

  this.formSignin = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
}
  ngOnInit() {
    this.getAllComptes();
  }
  getAllComptes() {
    this.compteService.getAllComptes().subscribe(
            data => this.comptes = data,
            errorCode =>  this.statusCode = errorCode);  
  }

  onSubmit() {
    this.router.navigate ( [ '/' ] );
  }
  onSubmitSignin(post){
    this.username = post.username;
    this.password = post.password;

    console.log("login", post);
    
    for (let i = 0; i < this.comptes.length; i++) {
      console.log(this.comptes[i]);

    }
  }

}
