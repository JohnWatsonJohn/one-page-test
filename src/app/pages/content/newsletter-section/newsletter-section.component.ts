import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-newsletter-section',
  template: `<section class="small-section bg-gray-lighter">
  <div class="container relative">
    <form action="#" method="post" class="form align-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="newsletter-label font-alt">
            {{newsTitle}}
          </div>
          <div class="mb-20">
            <input placeholder="{{newsEmail}}" class="newsletter-field input-md round mb-xs-10" type="email" pattern=".{5,100}" required/>
            <button type="submit" class="btn btn-mod btn-medium btn-round mb-xs-10">
              {{newsSubs}}
            </button>
          </div>
          <div class="form-tip">
            <i class="fa fa-info-circle"></i>{{newsInfo}} 
          </div>
        </div>
      </div>
    </form>
  </div>
</section>`,
  styleUrls: ['./newsletter-section.component.css']
})
export class NewsletterSectionComponent implements OnInit {

    @Input() newsTitle: string;
    @Input() newsEmail: string;
    @Input() newsSubs: string;
    @Input() newsInfo: string;

  constructor() { }

  ngOnInit() {
    this.newsTitle = 'Stay informed with our newsletter';
    this.newsEmail = 'Enter Your Email';
    this.newsSubs = 'Subscribe';
    this.newsInfo = 'Please trust us, we will never send you spam';
  }

}
