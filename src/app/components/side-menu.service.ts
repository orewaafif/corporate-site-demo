import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  showMenu: boolean = false

  showMenuChange$ = new Subject<boolean>()

  constructor() { }

  toggleMenu() {
    this.showMenu = !this.showMenu
    this.showMenuChange$.next(this.showMenu)
  }
}
