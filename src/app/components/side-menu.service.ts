import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  showMenu: boolean = false

  showMenuChange$ = new Subject<boolean>()

  constructor() { }

  toggleMenu(force?: boolean) {
    if (force === undefined)
      this.showMenu = !this.showMenu
    else
      this.showMenu = force

    this.showMenuChange$.next(this.showMenu)
  }
}
