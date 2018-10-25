import { AppConfig } from './../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HmntrdcService {

  private baseUrl: string = AppConfig.baseUrl;

  constructor(private http: HttpClient) { }

  getNavMenus(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/nav-menus/all');
  }
}
