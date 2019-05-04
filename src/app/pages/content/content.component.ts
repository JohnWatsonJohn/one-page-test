import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tst-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
   // TestimonialsSection
  public items = [
        {titleT: 'What people say?', textT: 'Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!', nameT: 'John Doe, doodle inc.'},
        {titleT: '2', textT: '2', nameT: '2'},
        {titleT: '3', textT: '3', nameT: '3'}
        ];
    // end Testimonials Section

   // BlogSection

    public blogTitle = 'Latest News';
    public blogHref = 'blog-classic-sidebar-right.html';
    public blogMore = 'All News in our blog';


  public blogItems = [
      {linkB: 'blog-single-sidebar-right.html', imgB: 'assets/images/blog/23.jpg', titleB: 'New Web Design Trends', nameB: 'John Doe', dateB: '10 December', textB: 'Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.'},
      {linkB: 'blog-single-sidebar-right.html', imgB: 'assets/images/blog/20.jpg', titleB: 'trtrtrtrt', nameB: 'tuturo', dateB: '00 December', textB: 'wwww wwww  wwwwww w      wwwwwwwww   ww w  w w w www wwwww'},
      {linkB: 'blog-single-sidebar-right.html', imgB: 'assets/images/blog/31.jpg', titleB: 'Hello world', nameB: 'Doe', dateB: '29 november', textB: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'}
  ];
    // end BlogSection

    // Features Section

    public featurHead = 'Why Choose Us?'

    public featurItems = [
        {iconF: 'icon-flag', titleF: 'We’re Creative', textF: 'Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim.'},
        {iconF: 'icon-clock', titleF: 'We’re Punctual', textF: 'Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum orci sit amet, iaculis libero.'},
        {iconF: 'icon-hotairballoon', titleF: 'We love minimalism', textF: 'Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta. Nulla facilisi. Suspendisse ultricies eros blandit.'},
        {iconF: 'icon-heart', titleF: 'We’re Creative', textF: 'Cras luctus interdum sodales. Quisque quis odio dui. Sedes sit amet neque malesuada, lobortis  commodo magna ntesque pharetra metus vivera sagittis.'},
        {iconF: 'icon-linegraph', titleF: 'We’re responsible', textF: ' Fusce aliquet quam eget neque ultrices elementum. Nulla posuere felis id arcu blandit sagittis. Eleifender vestibulum purus, sit amet vulputate risus.'},
        {iconF: 'icon-chat', titleF: 'We\'re Friendly', textF: 'Pulvinar vitae neque et porttitor. Integer non dapibus diam, ac eleifend lectus. Praesent sed nisi eleifend, fermentum orci sit amet, iaculis libero interdum.'}
    ];

    // End Features Section


    //  Portfolio Section

    public titleP = 'Portfolio';
    public textP  = 'In&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor consectetur fermentum nibh volutpat, accumsan purus.';


    public portfItems = [
        {workHrefP: 'assets/images/portfolio/1222232203625.jpg', workImgP: 'assets/images/portfolio/1222232203625.jpg', workTitleP: 'Portrait', workDescrP: 'Lightbox'},
        {workHrefP: 'assets/images/portfolio/1222324623549.jpg', workImgP: 'assets/images/portfolio/1222324623549.jpg', workTitleP: 'Vase 3D', workDescrP: 'External Page'},
        {workHrefP: 'assets/images/portfolio/1227413573394.jpg', workImgP: 'assets/images/portfolio/1227413573394.jpg', workTitleP: 'Boy in T-shirt', workDescrP: 'External Page'},
        {workHrefP: 'assets/images/portfolio/1228289291639.jpg', workImgP: 'assets/images/portfolio/1228289291639.jpg', workTitleP: 'Space', workDescrP: 'External Page'},
        {workHrefP: 'assets/images/portfolio/1228325344901.jpg', workImgP: 'assets/images/portfolio/1228325344901.jpg', workTitleP: 'Model', workDescrP: 'External Page'},
        {workHrefP: 'assets/images/portfolio/52483ea9e251c.jpg', workImgP: 'assets/images/portfolio/52483ea9e251c.jpg', workTitleP: 'Young Man', workDescrP: 'Lightbox'}

    ];

    public filterItems = [
        {filterPortf: '', filterName: 'All works'},
        {filterPortf: '.branding', filterName: 'Branding'},
        {filterPortf: '.design', filterName: 'Design'},
        {filterPortf: '.photography', filterName: 'Photography'},
    ]

    // End Portfolio Section


    //  Services Section

    public headTitleServ = 'Services';

    // End Services Section

    // About Section

    public titleAbout = 'About Studio';
    public textOneAbout = 'Design is not making beauty, beauty emerges from selection, affinities, integration, love.';
    public nameAbout = 'Louis Kahn';
    public textTwoAbout  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. ' +
        'Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.';
    public textThreeAbout = 'Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, ' +
        'fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.';


    public aboutItems = [
        {itemImgAbout: 'assets/images/team/46.jpg', itemTitleAbout: 'Hello & Welcome!',
            itemTextAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a iaculis diam.', itemNameAbout: 'Thomas Rhythm',
            itemRoleAbout: 'Art Director'},
        {itemImgAbout: 'assets/images/team/105.jpg', itemTitleAbout: 'Nice to meet!',
            itemTextAbout: 'Curabitur augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta.', itemNameAbout: 'Marta Laning',
            itemRoleAbout: 'Web engineer'},
        {itemImgAbout: 'assets/images/team/164.jpg', itemTitleAbout: 'Whats Up!',
            itemTextAbout: 'Adipiscing elit curabitur eu adipiscing lacus e adipiscing lacus, a iaculis diam.', itemNameAbout: 'Steve ANDERS',
            itemRoleAbout: 'Developer'}
        ];

    // End About Section




    // Contact Section

    public contTitle = 'Contact';
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

    // End Contact Section





  ngOnInit() {
        // console.log(this.backCallOne);
  }

}
