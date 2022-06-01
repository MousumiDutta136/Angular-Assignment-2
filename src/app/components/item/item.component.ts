import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductData } from 'src/app/models/product-data.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData!: ProductData;

  constructor(private carts: ProductsService) { }

  ngOnInit(): void {

  }
  addItem(itemData: any) {
    this.carts.addCartItems(itemData);
  }
}
