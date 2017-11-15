import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  
  public modif_pass: FormGroup;
  
  //init General Form Values
    post:any;  
    pass:string='';
    comf_pass: string='';
  
  constructor(private fb: FormBuilder, private router: Router) {
    
        this.modif_pass = new FormGroup({
          pass:new FormControl(),
          comf_pass: new FormControl()
        });
      }
      onModif_pass(post)
      {
        this.pass =post.pass;
        this.comf_pass = post.comf_pass;
      //test
        console.log("modif pass", post);  
      }
}
