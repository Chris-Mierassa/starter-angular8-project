import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    const config = {
      apiKey: 'AIzaSyAFIVslHWI2iWBo6keQoJzUDkBQ5q97x90',
      authDomain: 'starter-angular-template.firebaseapp.com',
      databaseURL: 'https://starter-angular-template.firebaseio.com',
      projectId: 'starter-angular-template',
      storageBucket: 'starter-angular-template.appspot.com',
      messagingSenderId: '748365511117',
      appId: '1:748365511117:web:1cc393ba9dc92b8c65ec84',
      measurementId: 'G-10L7Y5X2EB'
    };

    try {
      // Initialize Firebase
      firebase.initializeApp(config);
      firebase.analytics();
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.warn(77777777777777777);
        console.error('Firebase initialization error', err.stack);
      }
    }
  }

  ngOnInit() {
    console.warn(firebase.apps.length);
  }

}
