import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {

  @Input('title') title: string = 'Page Component'

  @Input('breakcrumbs') bCrumbs: string[] = ['Home', 'Page']

  @Input('sideMenu') sideMenu: ISideMenu[] = [
    {
      name: 'Placeholder 1',
      route: '/',
      active: false
    },
    {
      name: 'Placeholder 2',
      route: '/',
      active: false
    },
    {
      name: 'Placeholder 3',
      route: '/',
      active: false
    },
  ]

  activePage: ISideMenu

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.activePage = this.sideMenu.find(sMenu => sMenu.active) || this.sideMenu[0]
  }

}

interface ISideMenu {
  name: string,
  route: string,
  active: boolean
}