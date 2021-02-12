import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-profile',
  templateUrl: './corporate-profile.component.html',
  styleUrls: ['./corporate-profile.component.scss']
})
export class CorporateProfileComponent implements OnInit {

  constructor() { }

  profiles: {name: string, fileName: string}[] = [
    {
      name: '',
      fileName: 'datukjohar-chairman.jpg'
    },
    {
      name: '',
      fileName: 'george2.jpg'
    },
  ]

  ngOnInit(): void {
  }

}
