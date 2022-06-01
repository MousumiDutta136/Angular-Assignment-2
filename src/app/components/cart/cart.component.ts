import { Component, OnInit, Input } from '@angular/core';
import{ ProductData} from 'src/app/models/product-data.interface'
import { filter } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  itemCart: any =  [];
  constructor(private carts: ProductsService) { }

  ngOnInit(): void {
    this.carts.getCartItems()
    .subscribe(res => {
      this.itemCart = res;
    })
    }

  emptyCart(){
      this.carts.clearCart();
    }
  }


