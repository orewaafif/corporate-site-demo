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

  enumRoutes = Routes

  currRoute: '' | 'corporate-profile' | 'vision-core-values' | 'board-directors' | 'code-of-conduct' | 'management-team' | 'corporate-structure' = Routes.corporateProfile

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

  directors: { name: string, imgUrl: string }[] = [
    {
      name: '',
      imgUrl: 'datowan1.jpg',
    },
    {
      name: '',
      imgUrl: 'datukjohar-chairman.jpg',
    },
    {
      name: '',
      imgUrl: 'george2.jpg',
    },
    {
      name: '',
      imgUrl: 'junaidah2019a.jpg',
    },
    {
      name: '',
      imgUrl: 'khalid2019a.jpg',
    },
    {
      name: '',
      imgUrl: 'zaida2019a.jpg',
    }
  ]

  managements: { name: string, imgUrl: string}[] = [
    {
      name: '',
      imgUrl: 'akhter_0.png'
    },
    {
      name: '',
      imgUrl: 'azman2021g.jpg'
    },
    {
      name: '',
      imgUrl: 'eddy2021f.jpg'
    },
    {
      name: '',
      imgUrl: 'haniza.jpg'
    },
    {
      name: '',
      imgUrl: 'hcm2_2.jpg'
    },
    {
      name: '',
      imgUrl: 'norazman.jpg'
    },
    {
      name: '',
      imgUrl: 'pgceo_0.jpg'
    },
    {
      name: '',
      imgUrl: 'rizalzin2.jpg'
    },
    {
      name: '',
      imgUrl: 'senior-lena_0.png'
    },
    {
      name: '',
      imgUrl: 'tungcheelim2b.jpg'
    },
    {
      name: '',
      imgUrl: 'zainudin2021_0.jpg'
    },
    {
      name: '',
      imgUrl: 'zura_0.jpg'
    }
  ]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params: ', params)
      const { id } = params

      this.currRoute = id
      this.sideMenu.map(menu => {
        if (menu.route === id) menu.active = true
        else menu.active = false
      })
    })
  }

  async pageClickedEvt(menuClicked: ISideMenu) {
    await this.router.navigate(['about-us', menuClicked.route])
  }
}

enum Routes {
  corporateProfile = 'corporate-profile',
  visualCoreValues = 'vision-core-values',
  boardDirectors = 'board-directors',
  codeOfConduct = 'code-of-conduct',
  managementTeam = 'management-team',
  corporateStructure = 'corporate-structure'
}
