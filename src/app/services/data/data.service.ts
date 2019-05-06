import {Injectable, InjectionToken} from '@angular/core';
import {of} from 'rxjs';
import {data} from './data';
import {IDataService} from './types';


export const DATA_SERVICE = new InjectionToken<IDataService>('DATA_SERVICE');

@Injectable()
export class DataService implements IDataService {

  constructor() {
  }

  getItems(source: string) {
    return of(data[source]);
  }

}
