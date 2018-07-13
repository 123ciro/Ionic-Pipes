import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NotnullPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'notnull',
})
export class NotnullPipe implements PipeTransform {
 

  transform(value:any,texto =""){

    if(typeof value === 'number'){

      return value ? value : 0;
    }

    return value ? value :texto;


  }


  // transform(value: any ):any {
  //   if(value != null){
  //     return value;
  //   }else{
  //     return '-'
  //   }
  // }
}
