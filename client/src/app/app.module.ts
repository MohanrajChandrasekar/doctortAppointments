import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';

import {
  MatToolbarModule, MatInputModule, MatNativeDateModule,
  MatButtonModule, MatFormFieldModule, MatDatepickerModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
// import { MatTimepickerModule } from 'mat-timepicker';
import { AppToolbarComponent } from './common/app-toolbar/app-toolbar.component';
import { AddSlotsComponent } from './add-slots/add-slots.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentsComponent,
    AppToolbarComponent,
    AddSlotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    // MatTimepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MaterialTimePickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddSlotsComponent]
})
export class AppModule { }
