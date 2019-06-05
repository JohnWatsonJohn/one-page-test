import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "primeng/shared";


@Component({
  selector: 'tst-block-blog',
  template: `<div *ngIf="linkB" class="post-prev-img">
          <a *ngIf="imgB" href="{{linkB}}">
              <img src="{{imgB}}" alt="" />
          </a>
      </div>

      <div *ngIf="titleB" class="post-prev-title font-alt">
          <a href="">{{titleB}}</a>
      </div>

      <div *ngIf="nameB" class="post-prev-info font-alt">
          <a *ngIf="dateB" href="">{{nameB}}</a> | {{dateB}}
      </div>

      <div *ngIf="textB" class="post-prev-text">
          {{textB}}
      </div>

  <div class="post-prev-more">
      <a href="" class="btn btn-mod btn-gray btn-round">Read More <i class="fa fa-angle-right"></i></a>
  </div>`,
  styleUrls: ['./block-blog.component.css']
})
export class BlockBlogComponent implements OnInit {

    @Input() linkB: string;
    @Input() imgB: string;
    @Input() titleB: string;
    @Input() nameB: string;
    @Input() dateB: string;
    @Input() textB: string;


  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [BlockBlogComponent],
    declarations: [BlockBlogComponent],
    providers: [],
})
export class BlockBlogModule {
}