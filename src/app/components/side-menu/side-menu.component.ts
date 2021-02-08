import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SideMenuService } from '../side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {

  ui = {
    showMenu: false
  }

  menus = [
    {
      path: 'home',
      name: 'Home'
    },
    {
      path: 'profile',
      name: 'Corporate Profile'
    },
    {
      path: 'boards',
      name: 'Board of Directors'
    },
    {
      path: 'core-visions',
      name: 'Vision & Core values'
    },
    {
      path: 'code-conduct',
      name: 'Code of Conduct'
    },
    {
      path: 'managements',
      name: 'Management Team'
    },
  ]

  unsub$ = new Subject()

  constructor(
    private menuService: SideMenuService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ui.showMenu = this.menuService.showMenu

    this.menuService.showMenuChange$.pipe(takeUntil(this.unsub$.asObservable())).subscribe(status => {
      this.ui.showMenu = status
    })
  }

  ngOnDestroy(): void {
    this.unsub$.next()
    this.unsub$.unsubscribe()
  }

  onMenuClicked(path: string) {
    this.menuService.toggleMenu(false)
    this.router.navigate(['profile'])
  }

}
