import {Component, Input, OnInit} from '@angular/core';
import {TestimonialsModel} from "./models/testimonials.model";


@Component({
  selector: 'tst-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css'],

})
export class TestimonialsSectionComponent implements OnInit {

    @Input() titleT: string;
    @Input() textT: string;
    @Input() nameT: string;




    @Input() items: TestimonialsModel[] = [];

    constructor() {
    }



    getItems() {
        return this.items  = [
            {
                titleT: 'What people say?',
                textT: 'Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!',
                nameT: 'John Doe, doodle inc.',

            }
        ];

    }

    ngOnInit() {
        this.items = this.getItems();
        return console.log(this.items[0].nameT);
    }
}