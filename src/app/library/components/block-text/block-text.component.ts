import {Component, OnInit, NgModule, Input, ContentChild} from '@angular/core';

import {CommonModule} from '@angular/common';
import {Footer, Header, SharedModule} from 'primeng/shared';


@Component({
  selector: 'block-text',
  template: `
      <div *ngIf="icon" class="block-icon">
          <i [ngClass]="iconClass"></i>
      </div>

      <div *ngIf="image" class="block-image">
          <img [src]="image">
      </div>


      <div *ngIf="header" class="block-header">
          {{header}}
      </div>

      <div *ngIf="subheader" class="block-subheader">
          {{subheader}}
      </div>

      <div class="block-content">
          <ng-content></ng-content>
      </div>

      <div *ngIf="footerFacet" class="block-footer">
          <ng-content select="p-footer"></ng-content>
      </div>
  `
})

export class BlockTextComponent implements OnInit {

  @Input() icon: string;
  @Input() image: string;
  @Input() header: string;
  @Input() subheader: string;

  iconClass = {};

  @ContentChild(Footer) footerFacet;

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
    SharedModule,
  ],
  exports: [BlockTextComponent],
  declarations: [BlockTextComponent],
  providers: [],
})
export class BlockTextModule {
}
