import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISideMenu } from 'src/app/components/page/page.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  sideMenu: ISideMenu[] = [
    {
      name: 'Corporate Profile',
      route: 'corporate-profile'
    },
    {
      name: 'Vision & Core Values',
      route: 'vision-core-values'
    },
    {
      name: 'Board of Directors',
      route: 'board-directors'
    },
    {
      name: 'Code of Conduct',
      route: 'code-of-conduct'
    },
    {
      name: 'Management Team',
      route: 'management-team'
    },
    {
      name: 'Corporate Structure',
      route: 'corporate-structure'
    }
  ]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params: ', params)
    })
  }

  async pageClickedEvt(menuClicked: ISideMenu) {
    await this.router.navigate(['about-us', menuClicked.route])
  }

}
