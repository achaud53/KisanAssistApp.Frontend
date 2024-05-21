import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

// const STORE_BASE_URL = 'https://localhost:4455/'
// const STORE_BASE_URL = 'https://fakestoreapi.com';
const KISAN_BASE_URL = 'http://localhost:5059/api';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }


  getAllProducts(limit = '12', sort= 'desc'): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${KISAN_BASE_URL}/v1.0/products`
    )
  }

  getProductsBytype(productType: string): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${KISAN_BASE_URL}/v1.0/products/${productType}`
    )
  }

  getAllServices(limit = '12', sort= 'desc'): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${KISAN_BASE_URL}/v1.0/products`
    )
  }

  getServicesById(serviceType: string): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${KISAN_BASE_URL}/v1.0/services/${serviceType}`
    )
  }

}
