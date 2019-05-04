import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'tst-services-section',
    templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements OnInit {


    public servItems = [
        {hrefServ: '#service-branding', iconServ: 'icon-strategy', titleServ: 'Branding', idServ: 'service-branding',
            textServOne: 'A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.',
            nameServ: 'Jeff Bezos', textServTwo: 'Maecenas  volutpat, diam enim sagittis quam, id porta quam. ' +
                'Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, ' +
                'consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.',
            textServThree: ' Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus. ' +
                'Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, ' +
                'fermentum orci amet, iaculis libero.'},

        {hrefServ: '#service-web-design', iconServ: 'icon-desktop', titleServ: 'Web Design', idServ: 'service-web-design',
            textServOne: 'It doesnt matter how many times I have to click, as long as each click is a mindless, unambiguous choice.',
            nameServ: 'Steve Krug', textServTwo: 'Cras mi tortor, laoreet id ornare et, ' +
                'accumsan non magna. Maecenas vulputate accumsan velit. Curabitur a nulla ex. Nam a tincidunt ante. ' +
                'Vitae gravida turpis. Vestibulum variusnulla non nulla scelerisque tristique.',
            textServThree: '  Mauris id viverra augue, eu porttitor diam. Praesent faucibus est a interdum elementum. ' +
                'Nam varius at ipsum id dignissim. Nam a tincidunt ante lorem. ' +
                'Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor.'},

        {hrefServ: '#service-graphic', iconServ: 'icon-tools', titleServ: 'Graphic Design', idServ: 'service-graphic',
            textServOne: 'Never fall in love with an idea. Theyre whores. If the one youre with isnt doing the job, theres always another.',
            nameServ: 'Chip Kidd', textServTwo: 'Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. ' +
                'In maximus ligula metus pellentesque mattis. Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . ' +
                'Praesent sed nisi eleifend,fermentum orci amet, iaculis libero.',
            textServThree: ' Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Etiam sit amet fringilla lacus. ' +
                'Maecenas  volutpat, diam enim sagittis quam, id porta quam. ' +
                'Sed id dolor conctetur fermentum volutpat nibh, accumsan purus.'},

        {hrefServ: '#service-development', iconServ: 'icon-gears', titleServ: 'Development', idServ: 'service-development',
            textServOne: 'All that is valuable in human society depends upon the opportunity for development accorded the individual.',
            nameServ: 'Albert Einstein', textServTwo: 'Fusce hendrerit vitae nunc id gravida. ' +
                'Donec euismod quis ante at mattis. Mauris dictum ante sitamet enim interdum semper. ' +
                'Vestibulum odio justo, faucibus et dictum eu, malesuada nec neque.Maecenas  volutpat, diam enim sagittis.',
            textServThree: 'Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. ' +
                'Sed id dolor consectetur fermentumvolutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, ' +
                'consectetur adipiscing elit.Inmed maximus ligula metus pellentesque.'},

        {hrefServ: '#service-photography', iconServ: 'icon-camera', titleServ: 'Photography', idServ: 'service-photography',
            textServOne: 'Photography is the simplest thing in the world, but it is incredibly complicated to make it really work.',
            nameServ: 'Martin Parr', textServTwo: 'Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . ' +
                'Etiam sit amet fringilla lacus.Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. ' +
                'Integer lectus.Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.',
            textServThree: 'Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, ' +
                'accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. ' +
                'In maximus ligula metus pellentesque mattis.'}
    ]

  constructor() { }

  ngOnInit() {
  }

}
