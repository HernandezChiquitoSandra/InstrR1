
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  url = 'http://localhost:4000/api/Area/';

  constructor(private http: HttpClient) {}

  getAreass(): Observable<any>{
    return this.http.get(this.url);
  }
}

