import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-map-section',
  template: `<div class="google-map">

  <div data-address="Belt Parkway, Queens, NY, United States" id="map-canvas"></div>

  <div class="map-section">

    <div class="map-toggle">
      <div class="mt-icon">
        <i class="fa fa-map-marker"></i>
      </div>
      <div class="mt-text font-alt">
        <div class="mt-open">{{mapOpen}}<i class="fa fa-angle-down"></i></div>
        <div class="mt-close">{{mapClose}}<i class="fa fa-angle-up"></i></div>
      </div>
    </div>

  </div>

</div>`,
  styleUrls: ['./map-section.component.css']
})
export class MapSectionComponent implements OnInit {

    @Input() mapOpen: string;
    @Input() mapClose: string;

  constructor() { }

  ngOnInit() {
    this.mapOpen = 'Open the map';
    this.mapClose = 'Close the map';
  }

}
