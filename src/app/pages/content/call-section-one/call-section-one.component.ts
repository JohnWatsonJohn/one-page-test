import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-call-section-one',
  template: `<section class="page-section pt-0 pb-0 banner-section bg-dark" data-background="assets/images/full-width-images/1222232203625.jpg" style="background-image: url('assets/images/full-width-images/1222232203625.jpg');">
      <div class="container relative">
          <div class="row">
              <div class="col-sm-6">
                  <div class="mt-140 mt-lg-80 mb-140 mb-lg-80">
                      <div class="banner-content">
                          <h3 class="banner-heading font-alt">{{titleCallOne}}</h3>
                          <div class="banner-decription">
                              {{textCallOne}}
                          </div>
                          <div class="local-scroll">
                              <a href="#contact" class="btn btn-mod btn-w btn-medium btn-round">{{btnCallOne}}</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 banner-image wow fadeInUp">
                  <img src="{{imgCallOne}}" alt="" />
              </div>
          </div>
      </div>
  </section>`,
  styleUrls: ['./call-section-one.component.css']
})
export class CallSectionOneComponent implements OnInit {


    @Input() titleCallOne: string;
    @Input() textCallOne: string;
    @Input() btnCallOne: string;
    @Input() imgCallOne: string;



  constructor() { }

  ngOnInit() {

      this.titleCallOne = 'Looking for exclusive digital services?';
      this.textCallOne = 'Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Integer non dapibus diam, ac eleifend lectus.'
      this.btnCallOne = 'Lets talk';
      this.imgCallOne = 'assets/images/promo-1.png';
  }

}
