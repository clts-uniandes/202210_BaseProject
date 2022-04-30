import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(private http: HttpClient) { }

  getCafe(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(environment.cafeBaseUrl);
  }

}
