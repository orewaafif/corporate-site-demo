import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorizontalMenuService {

  currRoute$ = new BehaviorSubject('')

  constructor() { }
}
