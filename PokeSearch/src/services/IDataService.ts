import { Observable } from 'rxjs/Rx';

export abstract class IDataService {
  //abstract getJson() : Observable<any>;
  abstract search(text:string) : Observable<any>;
}
