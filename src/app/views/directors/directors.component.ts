import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss']
})
export class DirectorsComponent implements OnInit {

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
    {
      name: '',
      fileName: 'datowan1.jpg'
    },
    {
      name: '',
      fileName: 'junaidah2019a.jpg'
    },
    {
      name: '',
      fileName: 'khalid2019a.jpg'
    },
    {
      name: '',
      fileName: 'zaida2019a.jpg'
    }
  ]

  ngOnInit(): void {
  }

}
