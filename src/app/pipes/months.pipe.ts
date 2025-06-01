import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'months',
})
export class MonthsPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value == 1) {
      return `${value} month`;
    } else {
      return `${value} months`;
    }
  }
}
