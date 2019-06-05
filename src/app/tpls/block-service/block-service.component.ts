import {Component, OnInit, NgModule, Input, ContentChild} from '@angular/core';

import {CommonModule} from '@angular/common';
import {Footer, SharedModule} from 'primeng/shared';
import {TabViewModule} from 'primeng/tabview';

@Component({
    selector: 'tst-block-service',
    template: `
        
      <div *ngIf="iconServ" class="block-icon">
          
            <i [ngClass]="iconServ"></i>
          
      </div>


      <!--<div *ngIf="iconServ" class="block-iconServ">-->
          <!--{{iconServ}}-->
      <!--</div>-->
      
      <!--<div *ngIf="image" class="block-image">-->
          <!--<img [src]="image">-->
      <!--</div>-->


      <div *ngIf="titleServ" class="block-titleServ">
          {{titleServ}}
      </div>

      <div class="row text-service">
          <blockquote class="col-md-4">
            <p *ngIf="textServOne" class="block-textServOne">
              {{textServOne}}
            </p>
      
            <footer *ngIf="nameServ" class="block-nameServ">
                {{nameServ}}
            </footer>
          </blockquote>
          <p *ngIf="textServTwo" class="col-md-4">
            {{textServTwo}}
          </p>
          <p *ngIf="textServThree" class="col-md-4">
            {{textServThree}}
          </p>
      </div>
      <!--<div class="row">-->
          <!--<h2 class="title">{{title}}</h2>-->
          <!--<blockquote class="col-md-4">-->
              <!--<p class="textOne">{{textOne}}</p>-->
              <!--<footer class="name">{{name}}</footer>-->
          <!--</blockquote>-->
          <!--<p class="textTwo col-md-4">{{textTwo}}</p>-->
          <!--<p class="textThree col-md-4">{{textThree}}</p>-->
      <!--</div>-->

      <!--<div class="block-content">-->
          <!--<ng-content></ng-content>-->
      <!--</div>-->

      <!--<div *ngIf="footerFacet" class="block-footer">-->
          <!--<ng-content select="p-footer"></ng-content>-->
      <!--</div>-->
  `,
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

    // @ContentChild(Footer) footerFacet;

    constructor() {
    }

    ngOnInit() {
         if (this.iconServ) {
             this.iconServ1[this.iconServ] = true;
        }
    }
}


@NgModule({
    imports: [
        CommonModule,
        SharedModule,

    ],
    exports: [BlockServiceComponent],
    declarations: [BlockServiceComponent],
    providers: [],
})
export class BlockServiceModule {
}
