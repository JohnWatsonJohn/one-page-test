import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-menu',
  template: `<li class="active"><a href="{{navHrefMenu}}">{{navMenu}}</a></li>`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    @Input() navHrefMenu: string;
    @Input() navMenu: string;

  constructor() { }

  ngOnInit() {
  }

}
