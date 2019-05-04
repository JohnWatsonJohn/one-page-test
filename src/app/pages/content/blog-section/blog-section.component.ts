import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-blog-section',
  template: `      <div class="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">

      <div class="post-prev-img">
          <a href="{{linkB}}"><img src="{{imgB}}" alt="" /></a>
      </div>

      <div class="post-prev-title font-alt">
          <a href="">{{titleB}}</a>
      </div>

      <div class="post-prev-info font-alt">
          <a href="">{{nameB}}</a> | {{dateB}}
      </div>

      <div class="post-prev-text">
          {{textB}}
      </div>

      <div class="post-prev-more">
          <a href="" class="btn btn-mod btn-gray btn-round">Read More <i class="fa fa-angle-right"></i></a>
      </div>

  </div>`,
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {


    @Input() linkB: string;
    @Input() imgB: string;
    @Input() titleB: string;
    @Input() nameB: string;
    @Input() dateB: string;
    @Input() textB: string;

  constructor() { }

  ngOnInit() {
  }

}
