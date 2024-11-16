import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Use } from './use';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  //private baseurl="http://localhost:8084/api/submit";
  
  constructor(private httpclient :HttpClient) { }
 
  createuser ( save :Use):Observable<Object> {
    return this.httpclient.post('http://localhost:8081/api/see',save);
  }

  getData(): Observable<any> {
    return this.httpclient.get('http://localhost:8081/api/see');
  }
}
