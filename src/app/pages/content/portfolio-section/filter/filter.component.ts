import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-filter',
  template: `<a href="#" class="filter active" data-filter="*">{{filterName}}</a>`,
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    @Input() filterPortf: string;
    @Input() filterName: string;

  constructor() { }

  ngOnInit() {
  }

}
