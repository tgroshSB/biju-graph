import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private httpService: HttpClient) { }

  public getData(url: string): Observable<any> {
    return this.httpService.get('assets/json/' + url);
  }
}
