import { Component, OnInit } from '@angular/core';
import{ OrderData} from 'src/app/models/order-data.interface';
import { ProductsService } from 'src/app/services/products.service';
import { filter } from 'rxjs';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersdata: OrderData[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getOrders().pipe(
      filter(res => res !== undefined && res !== null)
    ).subscribe((response: any) =>{
      this.ordersdata = response;
    });
  }

}
