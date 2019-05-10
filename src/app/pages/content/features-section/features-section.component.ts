import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BlockTxtImgModule} from "../../../tpls/block-txt-img/block-txt-img.component";
import {AboutComponent} from "../about/about.component";

@Component({
  selector: 'tst-features-section',
  template: `      <div class="col-sm-6 col-md-4 col-lg-4">
      <div class="alt-features-item align-center">
          <div class="alt-features-icon">
              <span class="{{iconF}}"></span>
          </div>
          <h3 class="alt-features-title font-alt">{{titleF}}</h3>
          <div class="alt-features-descr align-left">
              {{textF}}
          </div>
      </div>
  </div>`,
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent implements OnInit {

    @Input() iconF: string;
    @Input() titleF: string;
    @Input() textF: string;

    public featurItems = [
        {iconF: 'icon-flag', titleF: 'We’re Creative', textF: 'Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim.'},
        {iconF: 'icon-clock', titleF: 'We’re Punctual', textF: 'Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum orci sit amet, iaculis libero.'},
        {iconF: 'icon-hotairballoon', titleF: 'We love minimalism', textF: 'Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta. Nulla facilisi. Suspendisse ultricies eros blandit.'},
        {iconF: 'icon-heart', titleF: 'We’re Creative', textF: 'Cras luctus interdum sodales. Quisque quis odio dui. Sedes sit amet neque malesuada, lobortis  commodo magna ntesque pharetra metus vivera sagittis.'},
        {iconF: 'icon-linegraph', titleF: 'We’re responsible', textF: ' Fusce aliquet quam eget neque ultrices elementum. Nulla posuere felis id arcu blandit sagittis. Eleifender vestibulum purus, sit amet vulputate risus.'},
        {iconF: 'icon-chat', titleF: 'We\'re Friendly', textF: 'Pulvinar vitae neque et porttitor. Integer non dapibus diam, ac eleifend lectus. Praesent sed nisi eleifend, fermentum orci sit amet, iaculis libero interdum.'}
    ];

  constructor() { }

  ngOnInit() {
  }

}

