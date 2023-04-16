import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../Iterface/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly url = 'http://localhost:'
  constructor(private http: HttpClient) { }

  getAllProducts() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get<Product>(`${this.url}`,{headers})
  }

  createProduct(product: Product) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<Product>(`${this.url}`,product,{headers})
  }

}
