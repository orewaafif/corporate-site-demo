import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private menuService: SideMenuService
  ) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuService.toggleMenu()
  }

}
