import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-call-section-two',
  template: `<section class="small-section bg-dark">
  <div class="container relative">

    <div class="align-center">
      <h3 class="banner-heading font-alt">{{titleCallTwo}}</h3>
      <div class="local-scroll">
        <a href="#contact" class="btn btn-mod btn-w btn-medium btn-round">{{btnCallTwo}}</a>
      </div>
    </div>

  </div>
</section>`,
  styleUrls: ['./call-section-two.component.css']
})
export class CallSectionTwoComponent implements OnInit {

    @Input() titleCallTwo: string;
    @Input() btnCallTwo: string;

  constructor() { }

  ngOnInit() {
    this.titleCallTwo = 'Like Our Creative Works?';
    this.btnCallTwo = 'Start Project';
  }

}
