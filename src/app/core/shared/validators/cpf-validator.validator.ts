import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      control.value === null ||
      control.value === undefined ||
      control.value === ''
    ) {
      console.log('on validator return null');
      return null;
    }

    const cpf = control.value.replace(/\D/g, '');

    if (cpf.length !== 11 || cpf.match(/(\d)\1{10}/)) {
      console.log('dont match 11 leng or match 11 same numbers');
      return { invalidCpf: true };
    }

    let sum = 0;
    let rest;

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) {
      rest = 0;
    }

    if (rest !== parseInt(cpf.substring(9, 10))) {
      console.log('rest dont match 9th number');
      return { invalidCpf: true };
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) {
      rest = 0;
    }

    if (rest !== parseInt(cpf.substring(10, 11))) {
      console.log('rest dont match 10th number');
      return { invalidCpf: true };
    }

    console.log('on validator return null');
    return null;
  };
}
