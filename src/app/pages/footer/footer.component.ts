import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockTextModule} from '../../library/components/block-text/block-text.component';
import {SocialLinksComponent} from './social-links/social-links.component';

@Component({
  selector: 'tst-footer',
  template: `
      <footer class="page-section bg-gray-lighter footer pb-60">
          <div class="container">
              <!-- Footer Logo -->
              <div class="local-scroll mb-30 wow fadeInUp" data-wow-duration="1.5s">
                  <a href="{{footerLogoHref}}"><img src="{{footerLogo}}" width="78" height="36" alt=""/></a>
              </div>
              <!-- End Footer Logo -->
              <!-- Social Links -->
              <div class="footer-social-links mb-110 mb-xs-60">
                  <tst-social-links *ngFor="let socialLink of socialLinks" [socialLinkHref]="socialLink.socialLinkHref"
                                    [socialLinkTitle]="socialLink.socialLinkTitle"
                                    [socialLinkIcon]="socialLink.socialLinkIcon"></tst-social-links>
              </div>
              <!-- End Social Links -->
              <!-- Footer Text -->
              <div class="footer-text">
                  <!-- Copyright -->
                  <div class="footer-copy font-alt">
                      <a href="{{footerCopyHref}}" target="_blank">{{footerCopy}}</a>.
                  </div>
                  <!-- End Copyright -->
                  <div class="footer-made">
                      {{footerMade}}
                  </div>
              </div>
              <!-- End Footer Text -->
          </div>
          <!-- Top Link -->
          <div class="local-scroll">
              <a href="#top" class="link-to-top"><i class="fa fa-caret-up"></i></a>
          </div>
          <!-- End Top Link -->
      </footer>
      <!-- End Footer -->`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerLogoHref: string;
  @Input() footerLogo: string;
  @Input() footerCopyHref: string;
  @Input() footerCopy: string;
  @Input() footerMade: string;
  public socialLinks = [
    {socialLinkHref: '#', socialLinkTitle: 'Facebook', socialLinkIcon: 'fa fa-facebook'},
    {socialLinkHref: '#', socialLinkTitle: 'Twitter', socialLinkIcon: 'fa fa-twitter'},
    {socialLinkHref: '#', socialLinkTitle: 'Behance', socialLinkIcon: 'fa fa-behance'},
    {socialLinkHref: '#', socialLinkTitle: 'LinkedIn', socialLinkIcon: 'fa fa-linkedin'},
    {socialLinkHref: '#', socialLinkTitle: 'Pinterest', socialLinkIcon: 'fa fa-pinterest'}
  ]

  constructor() {
  }

  ngOnInit() {

    this.footerLogoHref = '#top';
    this.footerLogo = 'assets/images/logo-footer.png';
    this.footerCopyHref = '#';
    this.footerCopy = 'Rhythm 2014';
    this.footerMade = 'Made with love for great people.';
  }

}

@NgModule({
  imports: [
    CommonModule,
    BlockTextModule,
  ],
  exports: [
    FooterComponent,
  ],
  declarations: [
    FooterComponent,
    SocialLinksComponent
  ],
  providers: [],
})
export class FooterModule {
}
