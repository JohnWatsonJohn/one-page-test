import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'tst-testimonials-section',
  template: `      
      <section class="page-section bg-dark bg-dark-alfa-90 fullwidth-slider" data-background="images/full-width-images/section-bg-3.jpg">
      <div *ngFor="let item of items"> 
          <div class="container relative">
              <div class="row">
                  <div class="col-md-8 col-md-offset-2 align-center">
                      <!-- Section Icon -->
                      <div class="section-icon">
                          <span class="icon-quote"></span>
                      </div>
                      <!-- Section Title --><h3 class="small-title font-alt">{{item.titleT}}</h3>
                      <blockquote class="testimonial white">
                          <p>{{item.textT}}
                              
                          </p>
                          <footer class="testimonial-author">
                             {{item.nameT}}
                          </footer>
                      </blockquote>
                  </div>
              </div>
          </div>
      </div> 
  </section>`,
  styleUrls: ['./testimonials-section.component.css'],

})
export class TestimonialsSectionComponent implements OnInit {

     // @Input() titleT: string;
     // @Input() textT: string;
     // @Input() nameT: string;


    constructor() {
    }

    public items = [
        {
            titleT: 'What people say?',
            textT: 'Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!',
            nameT: 'John Doe, doodle inc.',

        },
        {
            titleT: '2',
            textT: '2',
            nameT: '2',

        },
        {
            titleT: '3',
            textT: '3',
            nameT: '3',

        }
    ];

    ngOnInit() {

        console.log(this.items);
    }
}
