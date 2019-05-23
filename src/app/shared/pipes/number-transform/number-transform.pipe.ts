import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appNumberTransform'
})
export class NumberTransformPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'undefined') {
      if (value < 10) {
        return `0${value}`;
      }
      return `${value}`;
    }
    return '--';
  }
}
