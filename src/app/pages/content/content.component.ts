import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesSectionModule} from './features-section/features-section.component';
import {AboutComponent} from './about/about.component';
import {ServicesSectionComponent} from './services-section/services-section.component';
import {CallSectionOneComponent} from './call-section-one/call-section-one.component';
import {PortfolioSectionComponent} from './portfolio-section/portfolio-section.component';
import {CallSectionTwoComponent} from './call-section-two/call-section-two.component';
import {TestimonialsSectionComponent} from './testimonials-section/testimonials-section.component';
import {BlogSectionComponent} from './blog-section/blog-section.component';
import {NewsletterSectionComponent} from './newsletter-section/newsletter-section.component';
import {ContactSectionComponent} from './contact-section/contact-section.component';
import {MapSectionComponent} from './map-section/map-section.component';
import {Section1Component} from './services-section/section1/section1.component';
import {Section2Component} from './services-section/section2/section2.component';
import {FilterComponent} from './portfolio-section/filter/filter.component';
import {BlockTextModule} from '../../library/components/block-text/block-text.component';

@Component({
  selector: 'tst-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // TestimonialsSection
  public items = [
    {
      title: 'What people say?',
      text: 'Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!',
      name: 'John Doe, doodle inc.'
    },
    {title: '2', textT: '2', nameT: '2'},
    {title: '3', textT: '3', nameT: '3'}
  ];
  public blogTitle = 'Latest News';
  // end Testimonials Section

  // BlogSection
  public blogHref = 'blog-classic-sidebar-right.html';
  public blogMore = 'All News in our blog';
  public blogItems = [
    {
      linkB: 'blog-single-sidebar-right.html',
      imgB: 'assets/images/blog/23.jpg',
      titleB: 'New Web Design Trends',
      nameB: 'John Doe',
      dateB: '10 December',
      textB: 'Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.'
    },
    {
      linkB: 'blog-single-sidebar-right.html',
      imgB: 'assets/images/blog/20.jpg',
      titleB: 'trtrtrtrt',
      nameB: 'tuturo',
      dateB: '00 December',
      textB: 'wwww wwww  wwwwww w      wwwwwwwww   ww w  w w w www wwwww'
    },
    {
      linkB: 'blog-single-sidebar-right.html',
      imgB: 'assets/images/blog/31.jpg',
      titleB: 'Hello world',
      nameB: 'Doe',
      dateB: '29 november',
      textB: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
    }
  ];
  public featurHead = 'Why Choose Us?';
  // end BlogSection

  // Features Section
  public featurItems = [];
  public titleP = 'Portfolio';

  // End Features Section


  //  Portfolio Section
  public textP = `In&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis.
  Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor consectetur fermentum nibh volutpat,
  accumsan purus.`;


  public portfItems = [
    {
      workHrefP: 'assets/images/portfolio/1222232203625.jpg',
      workImgP: 'assets/images/portfolio/1222232203625.jpg',
      workTitleP: 'Portrait',
      workDescrP: 'Lightbox'
    },
    {
      workHrefP: 'assets/images/portfolio/1222324623549.jpg',
      workImgP: 'assets/images/portfolio/1222324623549.jpg',
      workTitleP: 'Vase 3D',
      workDescrP: 'External Page'
    },
    {
      workHrefP: 'assets/images/portfolio/1227413573394.jpg',
      workImgP: 'assets/images/portfolio/1227413573394.jpg',
      workTitleP: 'Boy in T-shirt',
      workDescrP: 'External Page'
    },
    {
      workHrefP: 'assets/images/portfolio/1228289291639.jpg',
      workImgP: 'assets/images/portfolio/1228289291639.jpg',
      workTitleP: 'Space',
      workDescrP: 'External Page'
    },
    {
      workHrefP: 'assets/images/portfolio/1228325344901.jpg',
      workImgP: 'assets/images/portfolio/1228325344901.jpg',
      workTitleP: 'Model',
      workDescrP: 'External Page'
    },
    {
      workHrefP: 'assets/images/portfolio/52483ea9e251c.jpg',
      workImgP: 'assets/images/portfolio/52483ea9e251c.jpg',
      workTitleP: 'Young Man',
      workDescrP: 'Lightbox'
    }

  ];
  public filterItems = [
    {filterPortf: '', filterName: 'All works'},
    {filterPortf: '.branding', filterName: 'Branding'},
    {filterPortf: '.design', filterName: 'Design'},
    {filterPortf: '.photography', filterName: 'Photography'},
  ];
  public headTitleServ = 'Services';

  // End Portfolio Section


  //  Services Section
  public titleAbout = 'About Studio';

  // End Services Section

  // About Section
  public textOneAbout = 'Design is not making beauty, beauty emerges from selection, affinities, integration, love.';
  public nameAbout = 'Louis Kahn';
  public textTwoAbout = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. ' +
    'Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.';

  public textThreeAbout = `Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar
  neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.
  Donec vel ultricies purus. Nam dictum sem, eu aliquam.`;

  public aboutItems = [
    {
      itemImgAbout: 'assets/images/team/46.jpg',
      itemTitleAbout: 'Hello & Welcome!',
      itemTextAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a iaculis diam.',
      itemNameAbout: 'Thomas Rhythm',
      itemRoleAbout: 'Art Director'
    },
    {
      itemImgAbout: 'assets/images/team/105.jpg',
      itemTitleAbout: 'Nice to meet!',
      itemTextAbout: 'Curabitur augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta.',
      itemNameAbout: 'Marta Laning',
      itemRoleAbout: 'Web engineer'
    },
    {
      itemImgAbout: 'assets/images/team/164.jpg',
      itemTitleAbout: 'Whats Up!',
      itemTextAbout: 'Adipiscing elit curabitur eu adipiscing lacus e adipiscing lacus, a iaculis diam.',
      itemNameAbout: 'Steve ANDERS',
      itemRoleAbout: 'Developer'
    }
  ];
  public contTitle = 'Contact';

  // End About Section


  // Contact Section
  public contName = 'Name';
  public contEmail = 'Email';
  public contMessage = 'Message';
  public contInfo = 'All the fields are required';
  public contBtn = 'Submit Message';
  public contItems = [
    {contItemIcon: 'fa fa-phone', contItemTitle: 'Call Us', contItemText: '+61 3 8376 6284'},
    {contItemIcon: 'fa fa-map-marker', contItemTitle: 'Address', contItemText: '245 Quigley Blvd, Ste K'},
    {contItemIcon: 'fa fa-envelope', contItemTitle: 'Email', contItemText: ''}
  ];

  constructor() {
  }

  // End Contact Section

  ngOnInit() {
    // console.log(this.backCallOne);
  }

}


@NgModule({
  imports: [
    CommonModule,
    FeaturesSectionModule,
    BlockTextModule,
  ],
  exports: [ContentComponent],
  declarations: [
    ContentComponent,
    FilterComponent,
    AboutComponent,
    ServicesSectionComponent,
    CallSectionOneComponent,
    PortfolioSectionComponent,
    CallSectionTwoComponent,
    TestimonialsSectionComponent,
    BlogSectionComponent,
    NewsletterSectionComponent,
    ContactSectionComponent,
    MapSectionComponent,
    Section1Component,
    Section2Component,
  ],
  providers: [],
})
export class ContentModule {
}
