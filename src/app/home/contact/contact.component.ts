import { Component, OnInit } from '@angular/core';
import {ContactForm} from './contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: ContactForm = new ContactForm();
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.warn('submit form');
  }

}
