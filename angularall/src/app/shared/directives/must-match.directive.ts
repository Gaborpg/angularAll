import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

//TODO: I Need a better solution,just to clarify the controls needs to match.

export const MustMatch = (...controlName: string[]) => {
  return (formGroup: FormGroup) => {
    let controls: AbstractControl[] = [];
    controlName.forEach((mustMatch) => {
      controls.push(formGroup.controls[mustMatch]);
    });
    if (!controls) {
      return null;
    }
    if (
      controls.filter((err) => err?.errors) &&
      !controls.filter((err) => err?.errors?.mustMatch)
    ) {
      return null;
    }

    controls.reduce((pre, cur) => {
      if (pre.value !== cur.value) {
        //Todo: Also I need to write the Error in the same time.

        if (pre.dirty || cur.dirty) {
          pre.markAsDirty();
          cur.markAsDirty();
        }
        cur.setErrors({ mustMatch: true });
        pre.setErrors({ mustMatch: true });
      } else if (!cur.hasError('required') && !pre.hasError('required')) {
        cur.setErrors(null);
        pre.setErrors(null);
      }
      return null;
    });
  };
};

@Directive({
  selector: '[myappMustMatch]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true },
  ],
})
export class MustMatchDirective implements Validator {
  // tslint:disable-next-line: no-input-rename
  @Input('myappMustMatch') myappMustMatch: string[] = [];

  constructor() {}
  validate(control: FormGroup): ValidationErrors | null {
    return MustMatch(...this.myappMustMatch)(control);
  }
}
