import {Component, OnInit, NgModule, Input, ContentChild} from '@angular/core';

import {CommonModule} from '@angular/common';
import {SharedModule} from 'primeng/shared';



@Component({
    selector: 'tst-block-txt-img',
    template: `
      <div *ngIf="icon" class="block-icon">
          <i [ngClass]="iconClass"></i>
      </div>
      <div class="team-item">
      
          <div *ngIf="itemImgAbout" class="team-item-image">
          <img [src]="itemImgAbout">

          <div class="team-item-detail">
              
      <div *ngIf="itemTitleAbout" class="block-title">
          {{itemTitleAbout}}
      </div>

      <div *ngIf="itemTextAbout" class="block-text">
          {{itemTextAbout}}
      </div>
      
      <div class="team-social-links">
        <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
        <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
        <a href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
       </div>
      </div>
      </div>
       <div class="team-item-name">
        {{itemNameAbout}}
       </div>

        <div class="team-item-role">
            {{itemRoleAbout}}
        </div>
      </div>
      <div class="block-content">
          <ng-content></ng-content>
      </div>

      <!--<div *ngIf="footerFacet" class="block-footer">-->
          <!--<ng-content select="p-footer"></ng-content>-->
      <!--</div>-->
  `,
    styleUrls: ['./block-txt-img.component.scss']
})



export class BlockTxtImgComponent implements OnInit {

    @Input() icon: string;
    @Input() itemImgAbout: string;
    @Input() itemTitleAbout: string;
    @Input() itemTextAbout: string;
    @Input() itemNameAbout: string;
    @Input() subheader: string;
    @Input() itemRoleAbout: string;
    @Input() titleAbout: string;
    @Input() textOneAbout: string;
    @Input() nameAbout: string;
    @Input() textTwoAbout: string;
    @Input() textThreeAbout: string;

    iconClass = {};

    // @ContentChild(Footer) footerFacet;

    constructor() {
    }

    ngOnInit() {
        if (this.icon) {
            this.iconClass[this.icon] = true;
        }
    }
}


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [BlockTxtImgComponent],
    declarations: [BlockTxtImgComponent],
    providers: [],
})
export class BlockTxtImgModule {
}
