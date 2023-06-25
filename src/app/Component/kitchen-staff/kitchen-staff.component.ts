import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-kitchen-staff',
  templateUrl: './kitchen-staff.component.html',
  styleUrls: ['./kitchen-staff.component.css']
})
export class KitchenStaffComponent implements OnInit{

  ngOnInit(){
    this.getAllOrders();
  }



  constructor(private service:CartService){}

  getAllOrders(){
//     this.service.getAllProducts().subscribe(
//       (data) => {
// this.
//       }
//     )
  }


}
