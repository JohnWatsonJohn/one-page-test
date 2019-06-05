import {Observable} from 'rxjs';

export interface ItemsAboutService {
    getItems(source: any): Observable<any>;
    getItemsS(sourceS: any): Observable<any>;
    getItemsT(sourceS: any): Observable<any>;
    getItemsB(sourceS: any): Observable<any>;
}
