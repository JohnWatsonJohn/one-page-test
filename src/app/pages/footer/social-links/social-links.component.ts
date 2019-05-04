import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-social-links',
  template: `<a href="{{socialLinkHref}}" title="{{socialLinkTitle}}" target="_blank"><i class="{{socialLinkIcon}}"></i></a>`,
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

    @Input() socialLinkHref: string;
    @Input() socialLinkTitle: string;
    @Input() socialLinkIcon: string;


  constructor() { }

  ngOnInit() {
  }

}
