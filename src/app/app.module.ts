import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import {ContentModule} from './pages/content/content.component';
import {AboutService, ITEMABOUT_SERVICE} from './services/items-about/items-about.service';
import {MenuComponent} from "./pages/navigation/menu/menu.component";

import {BlockTxtImgModule} from "./tpls/block-txt-img/block-txt-img.component";
import {FooterModule} from "./pages/footer/footer.component";
import {BlockServiceModule} from "./tpls/block-service/block-service.component";
import {DropdownModule, TabMenuModule} from "primeng/primeng";
import {
    BlockTestimonialsComponent,
    BlockTestimonialsModule
} from './tpls/block-testimonials/block-testimonials.component';
import {BlockBlogComponent, BlockBlogModule} from './tpls/block-blog/block-blog.component';
import {BlogSectionModule} from "./pages/content/blog-section/blog-section.component";
// import {AboutModule} from "./pages/content/about/about.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      NavigationComponent,
      MenuComponent,
      //BlockBlogComponent,

      // BlockTestimonialsComponent,


  ],
  imports: [
    BrowserModule,
      AccordionModule,
      BlockTxtImgModule,
      ContentModule,
      FooterModule,
      TabMenuModule,
      DropdownModule,
      //BlockBlogModule
     // BlogSectionModule
      // BlockTestimonialsModule

     // BlockServiceModule
  ],
  providers: [{provide: ITEMABOUT_SERVICE, useClass: AboutService}],
  bootstrap: [AppComponent]
})
//

export class AppModule { }
