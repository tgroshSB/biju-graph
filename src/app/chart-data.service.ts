import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private httpService: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpService.get('assets/json/data1.json');
  }
}
