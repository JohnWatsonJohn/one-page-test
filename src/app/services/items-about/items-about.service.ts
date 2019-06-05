import {Injectable, InjectionToken} from '@angular/core';
import {of} from 'rxjs';

import {ItemsAboutService} from './types';
import {itemsA, itemsB, itemsS, itemsT} from './items-about';


export const ITEMABOUT_SERVICE = new InjectionToken<ItemsAboutService>('ITEMABOUT_SERVICE');

@Injectable()
export class AboutService implements ItemsAboutService {

    constructor() {
    }

    getItems(source: string) {
        return of(itemsA[source]);
    }
    getItemsS(sourceS: string) {
        return of(itemsS[sourceS]);
    }
    getItemsT(sourceT: string) {
        return of(itemsT[sourceT]);
    }
    getItemsB(sourceB: string) {
        return of(itemsB[sourceB]);
    }

}
