import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {ITEMABOUT_SERVICE} from "../../../services/items-about/items-about.service";
import {ItemsAboutService} from "../../../services/items-about/types";
import {CommonModule} from "@angular/common";
import {BlockTestimonialsComponent} from "../../../tpls/block-testimonials/block-testimonials.component";



@Component({
  selector: 'tst-testimonials-section',
  template: `<section class="page-section bg-dark bg-dark-alfa-90 fullwidth-slider" data-background="images/full-width-images/section-bg-3.jpg">
 <tst-block-testimonials
          *ngFor="let item of items"  [titleT]="item.titleT" [textT]="item.textT" [nameT]="item.nameT"
  ></tst-block-testimonials>
  </section>`,
  styleUrls: ['./testimonials-section.component.css'],

})
export class TestimonialsSectionComponent implements OnInit {

      // @Input() titleT: string;
      // @Input() textT: string;
      // @Input() nameT: string;


    sourceT = 'testimonialsItems';


    items: any[];

    constructor(@Inject(ITEMABOUT_SERVICE) private itemsT: ItemsAboutService) {
    }

    ngOnInit() {
        this.itemsT.getItemsT(this.sourceT).subscribe((items: any[]) => {
            this.items = items;
            console.log('!!!!!!!!!', items);
        });
    }
}

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
         TestimonialsSectionComponent,
    ],
    declarations: [
          BlockTestimonialsComponent,
         TestimonialsSectionComponent
    ],
    providers: [],
})
export class TestimonialsSectionModule {
}

