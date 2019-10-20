import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

export class ContactForm extends FormGroup {
  constructor() {
    super({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cellphone: new FormControl('', Validators.required),
      object: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }
  get firstnameAbstractControl(): AbstractControl {
    return this.get('firstname');
  }
  get lastnameAbstractControl(): AbstractControl {
    return this.get('lastname');
  }
  get emailAbstractControl(): AbstractControl {
    return this.get('email');
  }
  get cellphoneAbstractControl(): AbstractControl {
    return this.get('cellphone');
  }
  get objectAbstractControl(): AbstractControl {
    return this.get('object');
  }
  get messageAbstractControl(): AbstractControl {
    return this.get('message');
  }
}

