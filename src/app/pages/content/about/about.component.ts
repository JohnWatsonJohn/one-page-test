import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {BlockTxtImgModule} from '../../../tpls/block-txt-img/block-txt-img.component';
import {CommonModule} from '@angular/common';
import {ITEMABOUT_SERVICE} from '../../../services/items-about/items-about.service';
import {ItemsAboutService} from '../../../services/items-about/types';

@Component({
  selector: 'tst-about',
  template: `<div
           class="about-section">
      <div class="row">
            <h2 class="title">{{title}}</h2>
      <div class="col-md-4 blockquote">
            <p class="textOne">{{textOne}}</p>
            <footer class="name">{{name}}</footer>
      </div>
            <p class="textThree col-md-4">{{textTwo}}</p>
            <p class="textThree col-md-4">{{textThree}}</p>
      </div>
        <tst-block-txt-img  class="col-sm-4 mb-xs-30 wow fadeInUp animated"
                            style="visibility: visible; animation-name: fadeInUp;"
                            *ngFor="let aboutItem of items"
                     [itemImgAbout]="aboutItem.itemImgAbout"
                     [itemTitleAbout]="aboutItem.itemTitleAbout" 
                     [itemTextAbout]="aboutItem.itemTextAbout"
                     [itemNameAbout]="aboutItem.itemNameAbout" 
                     [itemRoleAbout]="aboutItem.itemRoleAbout">
        </tst-block-txt-img>
      </div>`,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    @Input() title = 'About Studio';
    @Input() textOne = 'Design is not making beauty, beauty emerges from selection, affinities, integration, love.';
    @Input() name = 'Louis Kahn';
    @Input() textTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis.' +
        ' Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.';
    @Input() textThree = 'Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend,' +
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
        // this.title = 'About Studio';
        //     this.textOne = 'Design is not making beauty, beauty emerges from selection, affinities, integration, love.';
        //     this.name = 'Louis Kahn';
        //     this.textTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis.' +
        //         ' Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.';
        //     this.textThree = 'Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend,' +
        //         'fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.';


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
