import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductData } from '../models/product-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public listOfProducts = new BehaviorSubject<any>([]);

  cartItems: any = [];

  constructor(private http: HttpClient) { }

  // http call to retrieve list of products
  getProducts() {
    return this.http.get('/assets/product-data.json');
  }

  getOrders() {
    // http call to retrieve list of orders
    return this.http.get('/assets/order-data.json');
  }

  getCartItems(){
    return this.listOfProducts.asObservable();
  }

  setCartItems(product: any){
    this.cartItems.push(...product);
    this.listOfProducts.next(product);
  }

  addCartItems(product: any){
    this.cartItems.push(product);
    this.listOfProducts.next(this.cartItems);
    console.log(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.listOfProducts.next(this.cartItems);
  }


}
