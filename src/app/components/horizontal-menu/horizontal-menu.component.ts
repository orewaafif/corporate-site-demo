import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {

  @Input('menus') menus: IHorizMenu[] = [
    {
      name: 'About Us',
      route: 'about-us',
      children: []
    },
    {
      name: 'Investors Relations',
      route: 'investors-relations',
      children: []
    },
    {
      name: 'Subsidiaries',
      route: 'subsidiaries',
      children: []
    },
    {
      name: 'Corporate Sustainability',
      route: 'corporate-sustainability',
      children: []
    },
    {
      name: 'Media',
      route: 'media',
      children: []
    },
    {
      name: 'Career',
      route: 'career',
      children: []
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface IHorizMenu {
  name: string,
  route: string,
  children?: IHorizMenu[]
}
