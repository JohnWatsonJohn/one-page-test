import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {ITEMABOUT_SERVICE} from "../../../services/items-about/items-about.service";
import {ItemsAboutService} from "../../../services/items-about/types";
import {CommonModule} from "@angular/common";
import {BlockServiceComponent} from "../../../tpls/block-service/block-service.component";
import {TabViewModule} from "primeng/primeng";


@Component({
  selector: 'tst-services-section',
    template: `<tst-block-service class="icons-service"
                                    *ngFor="let servItem of items"
                                  [iconServ]="servItem.iconServ"
                                  [titleServ]="servItem.titleServ"
                                  
    ></tst-block-service>
    <tst-block-service *ngFor="let servItem of items"
                                  [textServOne]="servItem.textServOne" 
                                  [nameServ]="servItem.nameServ"
                                  [textServTwo]="servItem.textServTwo" 
                                  [textServThree]="servItem.textServThree"
                       
                       
    ></tst-block-service>`,
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements OnInit {


    sourceS = 'servItems';


    items: any[];

    constructor(@Inject(ITEMABOUT_SERVICE) private itemsS: ItemsAboutService) {
    }

    ngOnInit() {
        this.itemsS.getItemsS(this.sourceS).subscribe((items: any[]) => {
            this.items = items;
            console.log('!!!!!!!!!', items);
        });
    }
}

@NgModule({
    imports: [
        CommonModule,
        // BlockServiceModule,
        TabViewModule
    ],
    exports: [
        ServicesSectionComponent,
    ],
    declarations: [
        BlockServiceComponent,
        ServicesSectionComponent
    ],
    providers: [],
})
export class ServicesSectionModule {
}
