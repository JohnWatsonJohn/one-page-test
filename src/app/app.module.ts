import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavigationComponent} from './pages/navigation/navigation.component';
import {ContentModule} from './pages/content/content.component';
import {FooterModule} from './pages/footer/footer.component';
import {MenuComponent} from './pages/navigation/menu/menu.component';
import {BlockTextModule} from './library/components/block-text/block-text.component';
import {DATA_SERVICE, DataService} from './services/data/data.service';

// import {MenuItem} from 'primeng/api';


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
    BlockTextModule,
    ContentModule,
    FooterModule,
  ],
  providers: [
    {provide: DATA_SERVICE, useClass: DataService}
  ],
  bootstrap: [AppComponent]
})
//

export class AppModule {
}
