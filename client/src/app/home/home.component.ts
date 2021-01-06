import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'mohanTest';

  links = ['Queue', 'Earlier', 'Wait List', 'No Show'];
  activeLink = this.links[0];
  // dont use this function
  background: ThemePalette = undefined;
  // dont use this function
  selectedindex: any;

  data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
  // dont use this function
  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
  // dont use this function

  getIndex(index: any) {
    // console.log('index', index);
    this.selectedindex = index;
    if (index === 0) {
      this.data = [{
        patient: 'Mohanraj C',
        contact: 1234567890,
        appointment: new Date(),
        waited: '50 Min'
      },
      {
        patient: 'Gurumoorthy',
        contact: 1234567890,
        appointment: new Date(),
        waited: '30 Min'
      },
      {
        patient: 'Rajesh K',
        contact: 1234567890,
        appointment: new Date(),
        waited: '48 Min'
      }
      ];
    } else {
      this.data = [];
    }
  }

}
