import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddSlotsComponent } from '../add-slots/add-slots.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(private route: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addSlots(session: any) {
    console.log('add slots');
    const dialodRef = this.dialog.open(AddSlotsComponent, {
      data: { session },
      height: '80%',
      width: '80%',
      closeOnNavigation: true,
      disableClose: true

    });
  }

}
