import {Injectable, InjectionToken} from '@angular/core';
import {of} from 'rxjs';

import {ItemsAboutService} from './types';
import {itemsA} from './items-about';


export const ITEMABOUT_SERVICE = new InjectionToken<ItemsAboutService>('ITEMABOUT_SERVICE');

@Injectable()
export class AboutService implements ItemsAboutService {

    constructor() {
    }

    getItems(source: string) {
        return of(itemsA[source]);
    }

}
