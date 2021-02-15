import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output('onPageClick') pageClick = new EventEmitter<ISideMenu>()

  activePage: ISideMenu = this.sideMenu[0]

  constructor() { }

  ngOnInit(): void {
    this.activePage = this.sideMenu.find(sMenu => sMenu.active) || this.sideMenu[0]
  }

  ngAfterViewInit(): void {
  }

  pageClickEvt(clickEvt: any, menu: ISideMenu) {
    menu.active = true

    this.activePage = menu
    this.sideMenu.map(sMenu => {
      if (sMenu.route !== menu.route)
        sMenu.active = false
    })
    this.pageClick.emit(menu)
  }
}

export interface ISideMenu {
  name: string,
  route: string,
  active?: boolean
}