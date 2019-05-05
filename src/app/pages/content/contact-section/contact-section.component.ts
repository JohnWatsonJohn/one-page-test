import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tst-contact-section',
  template: `<div class="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
            <div class="contact-item">
              <div class="ci-icon">
                <i class="{{contItemIcon}}"></i>
              </div>
              <div class="ci-title font-alt">
                  {{contItemTitle}}
              </div>
              <div class="ci-text" id="emailCont">
                {{contItemText}}
              </div>
            </div>
          </div>`,
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

    @Input() contItemIcon: string;
    @Input() contItemTitle: string;
    @Input() contItemText: any;
    @Input() document: any;

    //public a: any = ``

  constructor() { }

  ngOnInit() {

    if (this.contItemIcon === 'fa fa-envelope') {
       // this.contItemText= this.a;
        // this.contItemText.innerHTML = ;
        document.getElementById('emailCont').innerHTML = '<a href="mailto:support@bestlooker.pro">support@bestlooker.pro</a>';
        // console.log(this.a);
    }
  }

}
