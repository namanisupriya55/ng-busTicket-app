import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class BusesDataServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get('/assets/data.json');
  }
}
