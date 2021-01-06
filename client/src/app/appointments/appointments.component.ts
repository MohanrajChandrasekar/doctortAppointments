import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddSlotsComponent } from '../add-slots/add-slots.component';
import { HttpServicesService } from '../services/http-services.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  slots: any;
  morning: any;
  evening: any;

  constructor(private route: Router,
              private httpService: HttpServicesService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSlots();
  }

  addSlots(session: any) {
    const dialogRef = this.dialog.open(AddSlotsComponent, {
      data: { session },
      height: '80%',
      width: '80%',
      closeOnNavigation: true,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getSlots();
    }, err => { throw err; });
  }

  getSlots() {
    this.httpService.getSlots().subscribe(res => {
      if (res.status === 200) {
        this.slots = res.data;
        const mrng = this.slots.find( x => x.slotSession === 'Morning');
        const evng = this.slots.find( x => x.slotSession === 'Evening');
        this.morning = mrng.slots;
        this.evening = evng.slots;
      }
    });
  }

}
