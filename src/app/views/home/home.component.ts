import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HorizontalMenuService } from 'src/app/components/horizontal-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currRoute = '/'

  unsub$ = new Subject<any>()

  constructor(
    private router: Router,
    private location: Location,
    private horizMenuService: HorizontalMenuService
  ) { }

  ngOnInit(): void {
    this.currRoute = this.location.path() || '/'
    this.horizMenuService.currRoute$.next(this.currRoute)
    
    this.router.events.pipe(takeUntil(this.unsub$.asObservable())).subscribe(event => {
      if (event instanceof NavigationEnd) {

        this.currRoute = event.urlAfterRedirects
        this.horizMenuService.currRoute$.next(this.currRoute)
      }
    })
  }

}
