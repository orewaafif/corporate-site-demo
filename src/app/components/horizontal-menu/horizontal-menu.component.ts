import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onMenuClicked(clickEvt: any, menu: IHorizMenu) {
    this.router.navigate(['/' + menu.route])
  }

  onSelectChanged(changeEvt: any) {
    console.log('changeEvt: ', changeEvt)
    const value = changeEvt?.target?.value

    this.router.navigate(['/' + value])
  }

}

export interface IHorizMenu {
  name: string,
  route: string,
  children?: IHorizMenu[]
}
