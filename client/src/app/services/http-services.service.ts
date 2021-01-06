import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  public apiURL = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addSlot(slot): Observable<any> {
    return this.http.post(this.apiURL + '/slots/add', slot, this.httpOptions ).pipe(tap());
  }
}
