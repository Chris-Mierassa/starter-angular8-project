import {Injectable} from '@angular/core';
import {AppModule} from '../../app.module';
import {Nav} from '../../home/shared/models/nav';

@Injectable({
  providedIn: AppModule
})

export class SidebarService {
  getSidebarItems(): Nav[] {
    const sidebarItems = [
      new Nav(0, 'Accueil', ['']),
      new Nav(1, 'Admin', ['admin']),
      new Nav(2, 'Articles', ['articles'])
    ];
    return sidebarItems;
  }
}
