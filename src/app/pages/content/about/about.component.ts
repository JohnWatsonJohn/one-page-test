import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {BlockTxtImgModule} from '../../../tpls/block-txt-img/block-txt-img.component';
import {CommonModule} from '@angular/common';
import {ITEMABOUT_SERVICE} from '../../../services/items-about/items-about.service';
import {ItemsAboutService} from '../../../services/items-about/types';

@Component({
  selector: 'tst-about',
  template: `<block-txt-img
           class="about-section"
           [titleAbout]="title"
            [textOneAbout]="textOne"
            [nameAbout]="name"
            [textTwoAbout]="textTwo"
            [textThreeAbout]="textThree">
      
      <block-txt-img *ngFor="let aboutItem of aboutItems"  
                     [itemImgAbout]="aboutItem.itemImgAbout"
                     [itemTitleAbout]="aboutItem.itemTitleAbout" 
                     [itemTextAbout]="aboutItem.itemTextAbout"
                     [itemNameAbout]="aboutItem.itemNameAbout" 
                     [itemRoleAbout]="aboutItem.itemRoleAbout">
      </block-txt-img>
      ></block-txt-img>`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    title = 'About Studio';
    textOne = 'Design is not making beauty, beauty emerges from selection, affinities, integration, love.';
    name = 'Louis Kahn';
    textTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis.' +
        ' Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.';
    textThree = 'Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend,' +
        'fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.';

    source = 'aboutItems';


    items: any[];

    constructor(@Inject(ITEMABOUT_SERVICE) private itemsA: ItemsAboutService) {
    }

    ngOnInit() {
        this.itemsA.getItems(this.source).subscribe((items: any[]) => {
            this.items = items;
            console.log('!!!!!!!!!', items);
        });

    }
}



@NgModule({
    imports: [
        CommonModule,
        BlockTxtImgModule,
    ],
    exports: [
        AboutComponent,
    ],
    declarations: [
        AboutComponent,
    ],
    providers: [],
})
export class AboutModule {
}