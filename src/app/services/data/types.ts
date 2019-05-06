import {Observable} from 'rxjs';

export interface IDataService {
  getItems(source: string): Observable<any>;
}
