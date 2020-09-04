import { DataInterface } from './../intercafe/employee.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) { }

  public getDetails(): any {
    return this.httpClient.get('https://dummy.restapiexample.com/api/v1/employees');
  }
}
