import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SeparadormilesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'separadormiles',
})
export class SeparadormilesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) :string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
  }
}
