import {Injectable} from '@angular/core';
import {AppModule} from '../../app.module';
import {Nav} from '../shared/models/nav';

@Injectable({
  providedIn: AppModule
})

export class NavService {
  getNavItems(): Nav[] {
    const navitems = [
      new Nav(1, 'Accueil', ['']),
      new Nav(2, 'Articles', ['articles']),
      new Nav(3, 'Contact', ['contact']),
      new Nav(4, 'Connexion', [''])
    ];
    return navitems;
  }
}