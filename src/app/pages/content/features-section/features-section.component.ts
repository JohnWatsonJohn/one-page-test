import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockTextModule} from '../../../library/components/block-text/block-text.component';
import {IDataService} from '../../../services/data/types';
import {DATA_SERVICE} from '../../../services/data/data.service';

@Component({
  selector: 'tst-features-section',
  template: `
      <block-text [header]="title" class="features-section">
          <block-text *ngFor="let item of items"
                      [icon]="item.icon"
                      [header]="item.title"
                      class="features-section-item">
              {{item.text}}
          </block-text>
      </block-text>
  `,

})
export class FeaturesSectionComponent implements OnInit {

  title = 'WHY CHOOSE US?';
  source = 'feature';

  items: any[];

  constructor(@Inject(DATA_SERVICE) private data: IDataService) {
  }

  ngOnInit() {
    this.data.getItems(this.source).subscribe((items: any[]) => {
      this.items = items;
    });
  }

}


@NgModule({
  imports: [
    CommonModule,
    BlockTextModule,
  ],
  exports: [
    FeaturesSectionComponent,
  ],
  declarations: [
    FeaturesSectionComponent,
  ],
  providers: [],
})
export class FeaturesSectionModule {
}
