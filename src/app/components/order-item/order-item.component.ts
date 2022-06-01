import { Component, OnInit, Input } from '@angular/core';
import{ OrderData} from 'src/app/models/order-data.interface';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() orderItem!: OrderData;
  constructor() { }

  ngOnInit(): void {
  }

}
