import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

export class ArticlesForm extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }
  get titleAbstractControl(): AbstractControl {
    return this.get('title');
  }
  get descriptionAbstractControl(): AbstractControl {
    return this.get('description');
  }
  get imageAbstractControl(): AbstractControl {
    return this.get('image');
  }
  get linkAbstractControl(): AbstractControl {
    return this.get('link');
  }
  get dateAbstractControl(): AbstractControl {
    return this.get('date');
  }
}

