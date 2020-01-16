import {Component} from '@angular/core';
import {data} from './../../../app/studentData.json';
@Component({
  selector: 'app-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  title = 'dashboard';
}

export class studentComponent {
  title = 'json-file-read-angular';
  public studentList: {
    name: string;
    email: string;
    FatherName: string;
    MotherName: string;
    PhoneNumber: string;
    Info: string;
  }[] = data;
}
