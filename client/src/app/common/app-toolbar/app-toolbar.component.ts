import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  physician: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.physician = {
      name: 'Dr. Nishanth',
      designation: 'Clinician',
      employment: 'Child Care Clinic'
    };
  }

  showAppointments() {
    this.router.navigate(['appointment']);
  }
}
