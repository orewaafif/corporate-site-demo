import { Component, OnDestroy, OnInit } from '@angular/core';
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

  unsub$ = new Subject()

  constructor(
    private menuService: SideMenuService
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

}
