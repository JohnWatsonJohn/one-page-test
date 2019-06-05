import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {ITEMABOUT_SERVICE} from "../../../services/items-about/items-about.service";
import {ItemsAboutService} from "../../../services/items-about/types";
import {CommonModule} from "@angular/common";
import {BlockTestimonialsComponent} from "../../../tpls/block-testimonials/block-testimonials.component";
import {BlockBlogComponent} from "../../../tpls/block-blog/block-blog.component";

@Component({
  selector: 'tst-blog-section',
  template: `

      <tst-block-blog class="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s"
              *ngFor="let blogItem of items"  [linkB]="blogItem.linkB" [imgB]="blogItem.imgB" [titleB]="blogItem.titleB"
                      [nameB]="blogItem.nameB" [dateB]="blogItem.dateB" [textB]="blogItem.textB"
      ></tst-block-blog>`,
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {




    sourceB = 'blogItems';


    items: any[];

    constructor(@Inject(ITEMABOUT_SERVICE) private itemsB: ItemsAboutService) {
    }

    ngOnInit() {
        this.itemsB.getItemsB(this.sourceB).subscribe((items: any[]) => {
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
        BlogSectionComponent,
    ],
    declarations: [
        BlockBlogComponent,
        BlogSectionComponent
    ],
    providers: [],
})
export class BlogSectionModule {
}
