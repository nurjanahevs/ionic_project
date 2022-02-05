import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(`http://localhost:8000/v1/api/products/homepage`);
  }

}
