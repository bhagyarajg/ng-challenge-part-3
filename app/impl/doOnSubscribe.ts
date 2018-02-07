import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/concat';

function doOnSubscribe<T>(this: Observable<T>, onSubscribe): Observable<T> {
   return Observable.empty()
      .do(null, null, onSubscribe)
      .concat(this);
}

Observable.prototype.doOnSubscribe = doOnSubscribe;

declare module 'rxjs/Observable' {
   interface Observable<T> {
      doOnSubscribe: typeof doOnSubscribe;
   }
}