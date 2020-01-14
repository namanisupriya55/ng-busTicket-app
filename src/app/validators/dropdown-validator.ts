import { AbstractControl } from '@angular/forms';

export function dropdownValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = control.value
  return valid
    ? null
    : { invalid: { valid: false, value: control.value } };
}
