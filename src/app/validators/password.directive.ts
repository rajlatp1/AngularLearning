import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    if(!hasUpperCase){
        return {passwordHasUppercase:false}
    }

    const hasLowerCase = /[a-z]+/.test(value);
    if(!hasLowerCase){
        return {passwordHasLowercase:false}
    }

    const hasNumeric = /[0-9]+/.test(value);
    if(!hasNumeric){
        return {passwordHasNumeric:false}
    }

    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"] ;
    for (let letter of value) {
      if (vowels.includes(letter) && (letter === letter.toUpperCase())) {        
        return {passwordHasCapitalVowel:true}
      }
      if ((letter.match(/[a-z]/i)) && (!vowels.includes(letter)) && (letter === letter.toLowerCase())) {   
        return {passwordHasLowerConsonent:true}
      }
    }
    return null;
    };
  }