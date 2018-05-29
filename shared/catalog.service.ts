import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Details,pDetails} from './details';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient) { }
  
  getdetails():Observable<Details>{
    return this.http.get<Details>('http://localhost:7070/api/catalogs');
  }
  getproducts():Observable<pDetails>{
    return this.http.get<pDetails>('http://localhost:7070/api/pproducts');
  }
  getproductsbyid(id:number):Observable<pDetails>{
    return this.http.get<pDetails>(`http://localhost:7070/api/pproducts/?catalogid=${id}`);
    }
}
