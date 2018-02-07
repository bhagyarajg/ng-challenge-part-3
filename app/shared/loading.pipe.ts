import { Pipe, PipeTransform } from '@angular/core';

/**
 * Displays 'loading...' if the given value is falsey.
 * 
 * Useful for chaining to the end of an async pipe, e.g.
 *    myThing$ | async | vmwLoading
 */
@Pipe({
   name: 'vmwLoading'
})
export class LoadingPipe implements PipeTransform {

   transform(value: any): any {
      if (!value) {
         return 'loading...';
      }
      return value;
   }
}
