import { Component,OnInit } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
declare function myfunction(): void;
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/cart.service';
import { Orders } from 'src/app/modal/orders';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // template: `
  // <button (click)="searchBtn()">Render HTML</button>
  

  //   <div [innerHTML]="getHtmlCode()"></div>
  // `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText!: string;
  //constructor(private http: HttpClient) {}
  users = [
    // { id: 11, name: 'Chapati', status: 'India' }
    // { id: 12, name: 'Veg.Biryani' , status: 'USA'},
    // { id: 13, name: 'Sandwich' ,status: 'UK'},
    // { id: 14, name: 'Celeritas' ,status: 'Canada' },
    // { id: 15, name: 'Magneta' ,status: 'Russia'},
    // { id: 16, name: 'RubberMan' ,status: 'China'},
    
  ];
  orders:Orders[]=[];
  orderItem:any;
  // CartService: any;
  constructor(private cart:CartService){}
  ngOnInit(): void {
    // this.cart.getAllProducts().subscribe(data => this.orderItem = data);
    // console.log(this.orderItem);
    this.fetchOrders();
      
  }
  



  private fetchOrders(){
    this.cart.getAllProducts().subscribe(data=>{
      this.orders=data;
    });
  }

  changeStatus(order: Orders) {
    
    this.cart.updateOrderStatus(order.cartid).subscribe(data1 =>{
      // if (this.selectedValue === 'inProgress') {
      if (order.status === 'inProgress') {
        // Update order status to "In Progress"
        order.status = 'In Progress';
        
      } else if (this.selectedValue === 'ready') {
        // Update order status to "Ready"
        order.status = 'Ready';
      }
    })
    location.reload(); 
    // location.reload(forceGet) ---> this will reload page from server otherwise site is loaded from cache 

  }

status(){
  console.log("hello");
}
searchBtn():string{
  this.searchText = "";
  const htmlCode = '<h1>Hello, Angular!</h1>';

  return htmlCode;
  
}
@Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  selectedValue !: string;
    // Function to send the selected value to the backend
    // sendToBackend() {
    //   // Use your preferred method to send the value to the backend (e.g., HTTP request)
    //   // For this example, let's assume you're using Angular's HttpClient module
      
    //   const valueToSend = this.selectedValue; // Get the selected value from the variable
  
    //   // Make an HTTP request to your backend API
    //   // Replace 'your-endpoint' with the actual endpoint URL
    //   // You can pass the selected value in the request body or query parameters, depending on your backend setup
    //   this.http.post('your-endpoint', { selectedValue: valueToSend })
    //     .subscribe(
    //       response => {
    //         console.log('Value sent to backend successfully');
    //         // Handle the response from the backend if needed
    //       },
    //       error => {
    //         console.error('Error sending value to backend:', error);
    //         // Handle the error if needed
    //       }
    //     );
    // }
  // onSelected(value: string) {
  //   this.selectedTeam = value;
  // }

  // changeStatus(order: Orders): void {

    // this.cart.updateOrderStatus(order.cartid).subscribe(

    //   (      updatedOrder: { status: string; }) => {

    //     order.status = updatedOrder.status;
    //     // console.log('Selected Option:', this.selectedValue);

    //   },

    //   (      error: any) => console.error(error)

    // );
    // const requestBody = { value: selectedValue };
  
  // Make an HTTP POST request to your backend API
  // this.http.('http://8082/api/v1/status/{cartid}', requestBody)
    // .subscribe(
      // response => {
        // console.log('Response from server:', response);
        // Handle the response from the server if needed
    //   },
    //   error => {
    //     console.error('Error:', error);
    //     // Handle any errors that occurred during the request
    //   }
    // );

  // }

}
