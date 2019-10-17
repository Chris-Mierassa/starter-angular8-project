import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Nav} from '../shared/models/nav';
import {NavService} from './nav-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navitems: Nav[];
  brandName: string = 'STARTER KIT';

  constructor(public  translate: TranslateService,
              private navService: NavService
  ) { }

  ngOnInit() {
    // translate
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    // nav items
    this.navitems = this.navService.getNavItems();
  }

}
