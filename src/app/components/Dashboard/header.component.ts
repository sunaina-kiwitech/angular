import {Component, OnInit} from '@angular/core';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  title = 'dashboard';
  items: any = (data as any).default.data;
  constructor() {}
  ngOnInit() {
    console.log(this.items);
  }
}
