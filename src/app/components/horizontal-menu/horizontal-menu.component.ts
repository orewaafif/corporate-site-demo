import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HorizontalMenuService } from '../horizontal-menu.service';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit, OnDestroy {

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

  currRoute = ''
  
  unsub$ = new Subject<any>()

  constructor(
    private router: Router,
    private horizMenuService: HorizontalMenuService
  ) { }

  ngOnInit(): void {
    this.horizMenuService.currRoute$.pipe(takeUntil(this.unsub$.asObservable())).subscribe(url => {
      this.currRoute = url
    })
  }

  ngOnDestroy(): void {
    this.unsub$.next()
    this.unsub$.unsubscribe()
  }

  onMenuClicked(clickEvt: any, menu: IHorizMenu) {
    this.router.navigate(['/' + menu.route])
  }

  onSelectChanged(changeEvt: any) {
    const value = changeEvt?.target?.value

    this.router.navigate(['/' + value])
  }

}

export interface IHorizMenu {
  name: string,
  route: string,
  children?: IHorizMenu[]
}
