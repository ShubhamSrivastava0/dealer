import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Dealer {
  id: any;
  name: any;
  email: any;
  pan_no:any;
  whatsapp_no:any;
  company_name:any;
  mobile_no:any;
}

@Injectable({
  providedIn: 'root'
})

export class DealerService {
  private token = 'Token 084f2df6319f2729c860fd3d1393840e41f56f00';
  private baseUrl = 'https://pv.greatfuturetechno.com/pv-api/dealer';


  constructor(private http: HttpClient) { }

  getDealers(): Observable<Dealer[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });
    return this.http.get<any>(this.baseUrl, { headers: headers }).pipe(catchError(this.handleError));
  }

  getDealer(id: number): Observable<Dealer> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers: headers }).pipe(catchError(this.handleError));
  }

  addDealer(dealer: Dealer): Observable<Dealer> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });
    return this.http.post<any>(this.baseUrl, dealer, { headers: headers }).pipe(catchError(this.handleError));

  }

  updateDealer(id: number, dealer: Dealer): Observable<Dealer> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });
    return this.http.put<any>(`${this.baseUrl}/${id}`, dealer, { headers: headers }).pipe(catchError(this.handleError));

  }

  deleteDealer(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers: headers }).pipe(catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
