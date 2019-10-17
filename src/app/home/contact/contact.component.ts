import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactForm} from './contact-form';
import {ToastContainerDirective, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: ContactForm = new ContactForm();
  submitted: boolean = false;
  toastrMsg: any;
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.toastr.overlayContainer = this.toastContainer;
  }

  onSubmit(formData) {
    this.submitted = true;
    console.warn(this.toastr.success('Hello world!', 'Toastr fun!'));
    console.warn(formData);
  }

}
