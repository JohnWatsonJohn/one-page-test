import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-portfolio-section',
  template: `      <li class="work-item mix photography">
      <a href="{{workHrefP}}" class="work-lightbox-link mfp-image">
          <div class="work-img">
              <img src="{{workImgP}}" alt="Work" />
          </div>
          <div class="work-intro">
              <h3 class="work-title">{{workTitleP}}</h3>
              <div class="work-descr">
                  {{workDescrP}}
              </div>
          </div>
      </a>
  </li>`,
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

    @Input() workHrefP: string;
    @Input() workImgP: string;
    @Input() workTitleP: string;
    @Input() workDescrP: string;

  constructor() { }

  ngOnInit() {
  }

}
