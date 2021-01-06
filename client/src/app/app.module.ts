import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';
import {ToastrModule} from 'ngx-toastr';

import {
  MatToolbarModule, MatInputModule, MatNativeDateModule,
  MatButtonModule, MatFormFieldModule, MatDatepickerModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule, MatSnackBar, MatSnackBarModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
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
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MaterialTimePickerModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddSlotsComponent]
})
export class AppModule { }
