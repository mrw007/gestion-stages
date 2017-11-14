import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {FormsModule} from '@angular/forms';

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

  constructor(private fb: FormBuilder, private router: Router) {

  this.formSignin = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
}
  ngOnInit() {
   
  }

  onSubmit() {
    this.router.navigate ( [ '/' ] );
  }
  onSubmitSignin(post){
    this.username = post.username;
    this.password = post.password;
    console.log("login", post);
    
  }

}
