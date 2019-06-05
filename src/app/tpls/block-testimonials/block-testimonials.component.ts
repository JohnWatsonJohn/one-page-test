import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "primeng/shared";


@Component({
  selector: 'tst-block-testimonials',
  template: `<div class="col-md-8 col-md-offset-2 align-center">
      <div class="section-icon">
      <span class="icon-quote"></span>
  </div>

  
  <div *ngIf="titleT" class="small-title font-alt">
      <p>{{titleT}}</p>
  </div>
  
  
  <blockquote *ngIf="textT" class="testimonial white">
      <p>{{textT}}</p>
      
      <footer *ngIf="nameT" class="testimonial-author">
          {{nameT}}
      </footer>
  </blockquote>
  </div>`,
  styleUrls: ['./block-testimonials.component.css']
})
export class BlockTestimonialsComponent implements OnInit {

    @Input() titleT: string;
    @Input() textT: string;
    @Input() nameT: string;


  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [BlockTestimonialsComponent],
    declarations: [BlockTestimonialsComponent],
    providers: [],
})
export class BlockTestimonialsModule {
}