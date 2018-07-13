import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TrimPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {
 
  transform(value: any):string  {

     return value? value.toString().trim(): '';

     
  }
}
