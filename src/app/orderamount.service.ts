import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderamountService {

  constructor(private httpclient :HttpClient) { }

  createorder ( save :number):Observable<Object> {
    return this.httpclient.post('http://localhost:8081/api/order',save);
  }

}
