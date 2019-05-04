import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/content/about/about.component';
import { ServicesSectionComponent } from './pages/content/services-section/services-section.component';
import { CallSectionOneComponent } from './pages/content/call-section-one/call-section-one.component';
import { PortfolioSectionComponent } from './pages/content/portfolio-section/portfolio-section.component';
import { CallSectionTwoComponent } from './pages/content/call-section-two/call-section-two.component';
import { FeaturesSectionComponent } from './pages/content/features-section/features-section.component';
import { TestimonialsSectionComponent } from './pages/content/testimonials-section/testimonials-section.component';
import { BlogSectionComponent } from './pages/content/blog-section/blog-section.component';
import { NewsletterSectionComponent } from './pages/content/newsletter-section/newsletter-section.component';
import { ContactSectionComponent } from './pages/content/contact-section/contact-section.component';
import { MapSectionComponent } from './pages/content/map-section/map-section.component';
import { Section1Component } from './pages/content/services-section/section1/section1.component';
import { Section2Component } from './pages/content/services-section/section2/section2.component';
import { SocialLinksComponent } from './pages/footer/social-links/social-links.component';
import { MenuComponent } from './pages/navigation/menu/menu.component';
import { FilterComponent } from './pages/content/portfolio-section/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent,
    ServicesSectionComponent,
    CallSectionOneComponent,
    PortfolioSectionComponent,
    CallSectionTwoComponent,
    FeaturesSectionComponent,
    TestimonialsSectionComponent,
    BlogSectionComponent,
    NewsletterSectionComponent,
    ContactSectionComponent,
    MapSectionComponent,
    Section1Component,
    Section2Component,
    SocialLinksComponent,
    MenuComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
      AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//

export class AppModule { }
