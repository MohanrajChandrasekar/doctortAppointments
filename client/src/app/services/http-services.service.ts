import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  public apiURL = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  getSlots(): Observable<any> {
    return this.http.get(this.apiURL + '/slots/read', this.httpOptions).pipe(tap());
  }

  addSlot(slot): Observable<any> {
    return this.http.post(this.apiURL + '/slots/add', slot, this.httpOptions ).pipe(tap());
  }

  toaster(action, message) {
    if (action === 'Success') {
      this.snackBar.open(message, '',
      { duration: 2000, verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['background-green'] });
    } else {
      this.snackBar.open(message, '',
      { duration: 2000, verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['background-red'] });
    }
  }
}
