import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-section1',
  template: ` <li class="active">
      <a href="{{hrefServ}}" data-toggle="tab">

          <div class="alt-tabs-icon">
              <span class="{{iconServ}}"></span>
          </div>
          {{titleServ}}
      </a>
  </li>`,
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

    @Input() hrefServ: string;
    @Input() iconServ: string;
    @Input() titleServ: string;

  constructor() { }

  ngOnInit() {
  }

}
