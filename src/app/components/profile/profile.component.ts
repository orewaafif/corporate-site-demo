import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input('src') src: string = 'assets/profiles/directors/datowan1.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
