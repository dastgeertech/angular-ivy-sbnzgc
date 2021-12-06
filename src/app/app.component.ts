import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  Users$: User[];

  constructor(private dataservice: DataService) {}
  ngOnInit() {
    return this.dataservice
      .getUsers()
      .subscribe((data) => (this.Users$ = data));
  }
}
