import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './modal/orders';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { 

  }
  // public getAllProducts():Observable<Orders[]>{
  //   // return this.http.get('localhost:8082/api/v1');
  //   return this.http.get<Orders[]>('http://localhost:8082/api/v1/allorders');
  // }
  //  for getting order by status in front end by @Quety
  public getAllProducts():Observable<Orders[]>{
    // return this.http.get('localhost:8082/api/v1');
    return this.http.get<Orders[]>('http://localhost:8082/api/v1/sortbystatus');
  }

  // constructor(private http: HttpClient) { }private apiUrl = 'http://localhost:8090/api/v1/staff'; // Replace with your actual backend API URL





  // getOrders(): Observable<Order[]> {

  //   return this.http.get<Order[]>(`${this.apiUrl}/orders`);

  // }




  // updateOrderStatus(cartId: number): Observable<any> {

  //   // return this.http.put<any>(`${this.apiUrl}/orders/${cartId}`,{});
  //   // return this.http.put<any>('http://localhost:8082/api/v1/staff/orders',{});
  //   return this.http.put<any>('http://localhost:8082/api/v1/allorders',{});

  // }
  updateOrderStatus(cartId: number): Observable<any> {

    // return this.http.put<any>(`${this.apiUrl}/orders/${cartId}`,{});
    // return this.http.put<any>('http://localhost:8082/api/v1/staff/orders',{});
    return this.http.put<any>(`http://localhost:8082/api/v1/status/${cartId}`,{});

  }
  
}
