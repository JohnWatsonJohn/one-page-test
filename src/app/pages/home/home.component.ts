import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tst-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() homeTitle: string;
  @Input() homeSubTitle: string;
  @Input() imageSrc: string;



  constructor() { }

  ngOnInit() {
      this.homeTitle = 'Thomas Rhythm';
      this.homeSubTitle = 'Extraordinary art director & creative minimalism lover';
      this.imageSrc = 'assets/images/full-width-images/2fons.ru-15904.jpg';
  }

}
