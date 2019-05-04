import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-about',
  template: `<div class="col-sm-4 mb-xs-30 wow fadeInUp">
      <div class="team-item">

          <div class="team-item-image">

              <img src="{{itemImgAbout}}" alt="" />

              <div class="team-item-detail">

                  <h4 class="font-alt normal">{{itemTitleAbout}}</h4>

                  <p>
                      {{itemTextAbout}}
                  </p>

                  <div class="team-social-links">
                      <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                      <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                      <a href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
                  </div>

              </div>
          </div>

          <div class="team-item-descr font-alt">

              <div class="team-item-name">
                  {{itemNameAbout}}
              </div>

              <div class="team-item-role">
                  {{itemRoleAbout}}
              </div>

          </div>

      </div>
  </div>`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    @Input() itemImgAbout: string;
    @Input() itemTitleAbout: string;
    @Input() itemTextAbout: string;
    @Input() itemNameAbout: string;
    @Input() itemRoleAbout: string;

  constructor() { }

  ngOnInit() {
  }

}
