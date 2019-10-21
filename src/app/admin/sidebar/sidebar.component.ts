import { Component, OnInit } from '@angular/core';
import {Nav} from '../../shared/models/nav';
import {SidebarService} from './sidebar-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  brandName: string = 'STARTER KIT';
  sidebarItems: Nav[];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarItems = this.sidebarService.getSidebarItems();
  }

}
