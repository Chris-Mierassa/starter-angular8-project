import {Injectable} from '@angular/core';
import {AppModule} from '../../app.module';
import {Nav} from '../../shared/models/nav';

@Injectable({
  providedIn: AppModule
})

export class NavService {
  getNavItems(): Nav[] {
    const navitems = [
      new Nav(1, 'Articles', ['articles']),
      new Nav(2, 'Présentation', ['presentation']),
      new Nav(3, 'Contact', ['contact']),
      // new Nav(5, 'Connexion', ['signin'])
    ];
    return navitems;
  }
}
