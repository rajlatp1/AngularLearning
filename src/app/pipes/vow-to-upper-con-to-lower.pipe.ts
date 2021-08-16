import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowToUpperConToLower'
})
export class VowToUpperConToLowerPipe implements PipeTransform {

  transform(value: string): string {
    const vowels = ["a", "e", "i", "o", "u"];
    var result ="";
    for (let letter of value.toLowerCase()) {
      if (vowels.includes(letter)) {
        result=result+letter.toUpperCase();
      }
      else{
        result=result+letter;
      }
    }
    return result;
  }

}



