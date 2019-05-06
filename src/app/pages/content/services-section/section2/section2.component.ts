import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-section2',
  template: `
      <div class="tab-pane fade in active" id="{{idServ}}">

          <div class="section-text">
              <div class="row">
                  <div class="col-md-4 mb-md-40 mb-xs-30">
                      <blockquote class="mb-0">
                          <p>
                              {{textServOne}}
                          </p>
                          <footer>
                              {{nameServ}}
                          </footer>
                      </blockquote>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                      {{textServTwo}}
                  </div>
                  <div class="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                      {{textServThree}}
                  </div>
              </div>
          </div>

      </div>`,
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  @Input() idServ: string;
  @Input() textServOne: string;
  @Input() nameServ: string;
  @Input() textServTwo: string;
  @Input() textServThree: string;

  constructor() {
  }

  ngOnInit() {
  }

}
