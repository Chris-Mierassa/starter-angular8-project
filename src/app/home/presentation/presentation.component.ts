import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  imgPath: string = '../../assets/images/articles/article1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
