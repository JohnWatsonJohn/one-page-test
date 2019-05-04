import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
