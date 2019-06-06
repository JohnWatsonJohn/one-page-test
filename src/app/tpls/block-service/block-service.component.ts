import {Component, OnInit, NgModule, Input, ContentChild, Inject} from '@angular/core';

import {CommonModule} from '@angular/common';
import {Footer, SharedModule} from 'primeng/shared';

import {ITEMABOUT_SERVICE} from "../../services/items-about/items-about.service";
import {ItemsAboutService} from "../../services/items-about/types";
import {TabViewModule} from "primeng/primeng";


@Component({
    selector: 'tst-block-service',
    template: `<p-tabView>
          <p-tabPanel [leftIcon]="item.iconServ" [header]="item.titleServ" *ngFor="let item of items; let i = index" [selected]="i == 0">
              <div class="row text-service">
                  <blockquote class="col-md-4">
                      <p  class="block-textServOne">
                        {{item.textServOne}}
                      </p>
                      <footer  class="block-nameServ">
                        {{item.nameServ}}
                      </footer>
                  </blockquote>
                  <p  class="col-md-4">
                    {{item.textServTwo}}
                  </p>
                  <p  class="col-md-4">
                  {{item.textServThree}}
                  </p>
              </div>
          </p-tabPanel>
      </p-tabView>`,
    styleUrls: ['./block-service.component.scss']
})

export class BlockServiceComponent implements OnInit {

    @Input() icon: any;
    @Input() iconServ: string;
    @Input() image: string;
    @Input() titleServ: string;
    @Input() textServOne: string;
    @Input() nameServ: string;
    @Input() textServTwo: string;
    @Input() textServThree: string;

     iconServ1 = {};

    sourceS = 'servItems';


    items: any[];

    constructor(@Inject(ITEMABOUT_SERVICE) private itemsS: ItemsAboutService) {
    }

    ngOnInit() {
        this.itemsS.getItemsS(this.sourceS).subscribe((items: any[]) => {
            this.items = items;
            console.log('!!!!!!!!!', items);
            if (this.iconServ) {
                this.iconServ1[this.iconServ] = true;
            }
        });
    }
}



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TabViewModule

    ],
    exports: [BlockServiceComponent],
    declarations: [BlockServiceComponent],
    providers: [],
})
export class BlockServiceModule {
}
