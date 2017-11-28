import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  user: string;
  type: string;
  constructor(translate: TranslateService, private router: Router) {
    this.type = sessionStorage.getItem('type');
    this.user = sessionStorage.getItem('user');
    if (this.user == null || this.type == null) {
      this.router.navigateByUrl('/authentication/signin');
      console.log('marakkek');
    } 
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
