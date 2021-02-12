import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  @Input('profileUrl') profileUrl: string = 'george2.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
