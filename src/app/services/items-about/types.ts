import {Observable} from 'rxjs';

export interface ItemsAboutService {
    getItems(source: any): Observable<any>;
}