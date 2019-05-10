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
//import {AboutModule} from "./pages/content/about/about.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      NavigationComponent,
      MenuComponent,


  ],
  imports: [
    BrowserModule,
      AccordionModule,
      BlockTxtImgModule,
      ContentModule,
      FooterModule
  ],
  providers: [{provide: ITEMABOUT_SERVICE, useClass: AboutService}],
  bootstrap: [AppComponent]
})
//

export class AppModule { }
