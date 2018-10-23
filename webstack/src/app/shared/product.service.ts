import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product:Product;

  public baseUrl:string = "/mock/5bbf29acebbb4b23210fce84/webstack";
  
  public webBaseUrl:string = "http://192.168.8.116:8888/simsgismap/api/crawlerDatas?pageNum=1&pageSize=250&type=";

  constructor(private http:HttpClient) { }

  getProductByName(): Observable<any> {
    return this.http.get<Product>(this.baseUrl);
  }
}

export class Product {
  constructor(
    public link:string,
    public photo:string,
    public introduce:string,
    public name:string,
    public type:string
  ) {}
}
