import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Nav} from '../../shared/models/nav';
import {NavService} from './nav-service';
import {AuthService} from "../shared/services/auth.service";
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navitems: Nav[];
  brandName: string = 'STARTER KIT';
  isAuth: boolean;
  toggleNavbar: boolean = true;

  constructor(public  translate: TranslateService,
              private navService: NavService,
              private  auth: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
    // translate
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    // nav items
    this.navitems = this.navService.getNavItems();
    //CHECK IF USER IS CONNECTED
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  admin() {
    this.router.navigate(['/admin']);
  }

  signOut() {
    this.auth.signOutUser();
    console.warn('deconnexion');
  }

  hideNav() {
    this.toggleNavbar = !this.toggleNavbar;
    console.warn(this.toggleNavbar);
  }
}
