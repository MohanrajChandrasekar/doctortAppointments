import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServicesService } from '../services/http-services.service';

@Component({
  selector: 'app-add-slots',
  templateUrl: './add-slots.component.html',
  styleUrls: ['./add-slots.component.scss']
})
export class AddSlotsComponent implements OnInit {

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.dialogRef.close();
  }

  slotForm: FormGroup;
  sessions = [{ session: 'Morning' }, { session: 'Evening' }];
  private startTime: any;
  private endTime: any;
  private endTimeBack: any;

  constructor(private fb: FormBuilder,
              private httpService: HttpServicesService,
              private dialogRef: MatDialogRef<AddSlotsComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.slotForm = this.fb.group({
      slotDate: [null, Validators.compose([Validators.required])],
      slotSession: [null, Validators.compose([Validators.required])]
    });
    console.log(data);
  }

  ngOnInit(): void {
    const date1 = new Date();
    const hh = date1.getHours();
    const mm = date1.getMinutes();
    this.startTime = { hour: hh, minute: mm, meriden: 'PM', format: 24 };
    const date2 = new Date();
    date2.setMinutes(date1.getMinutes() + 30);
    this.endTimeBack = this.endTime = { hour: date2.getHours(), minute: date2.getMinutes(), meriden: 'PM', format: 24 };
  }

  save() {
    console.log('save');
    const obj = Object.assign({}, this.slotForm.value);
    obj.startTime = this.startTime;
    obj.endTime = this.endTime;
    console.log(obj);
    this.httpService.addSlot(obj).subscribe( res => {
      if (res.status === 200 ) {
        console.log(res.message);
      }
    });
  }

  cancel() {
    console.log('cancel');
    this.dialogRef.close();
  }

  onFirstTime(event) {
    console.log(event);
    let time = event;
    time.minute = parseInt(time.minute, 10) + 30;
    if (parseInt(time.hour, 10) === 24) {
      time.hour = 1;
    }
    if (parseInt(time.minute, 10) >= 60) {
      time.minute = parseInt(time.minute, 10) - 60;
      time.hour = parseInt(time.hour, 10) + 1;
    }
    this.endTimeBack = this.endTime = { hour: time.hour, minute: time.minute, meriden: 'PM', format: 24 };
  }

  onEndTime($event) {
    this.endTime =  this.endTimeBack;
  }

}
