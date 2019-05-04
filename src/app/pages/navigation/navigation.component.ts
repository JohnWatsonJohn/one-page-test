import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tst-navigation',
  template: `<nav class="main-nav dark transparent stick-fixed">
  <div class="full-wrapper relative clearfix">
    <!-- Logo ( * your text or image into link tag *) -->
    <div class="nav-logo-wrap local-scroll">
      <a href="#top" class="logo">
        <img src="{{navLogo}}" width="118" height="27" alt="" />
      </a>
    </div>
    <div class="mobile-nav">
      <i class="fa fa-bars"></i>
    </div>
    <!-- Main Menu -->
    <div class="inner-nav desktop-nav">
      <ul class="clearlist scroll-nav local-scroll">
        <tst-menu *ngFor="let menuItem of menuItems"  [navHrefMenu]="menuItem.navHrefMenu" [navMenu]="menuItem.navMenu"></tst-menu>
      </ul>
    </div>
  </div>
</nav>`,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  public navLogo = 'assets/images/logo-white.png';

  public menuItems = [
          {navHrefMenu: '#home', navMenu: 'Home'},
          {navHrefMenu: '#about', navMenu: 'About'},
          {navHrefMenu: '#services', navMenu: 'Services'},
          {navHrefMenu: '#portfolio', navMenu: 'Portfolio'},
          {navHrefMenu: '#news', navMenu: 'News'},
          {navHrefMenu: '#contact', navMenu: 'Contacts'},
      ];




  ngOnInit() {
  }

}
