import {Component, HostListener, OnInit} from '@angular/core';
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
  screenHeight: string;
  screenWidth: any;
  isToogle: boolean = true;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarItems = this.sidebarService.getSidebarItems();
    this.getScreenSize();
  }

  sidebar() {
    this.isToogle = !this.isToogle;
    console.warn('toogle------');
  }

  @HostListener('window:resize', [])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 992) {
      this.screenHeight = 0 + 'px';
    } else {
      this.screenHeight = window.innerHeight + 'px';
    }
  }
}
