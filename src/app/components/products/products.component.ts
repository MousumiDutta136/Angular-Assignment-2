import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { filter } from 'rxjs';
import{ ProductData} from 'src/app/models/product-data.interface'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
 productsdata: ProductData[] = [];
 filteredProductList: ProductData[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().pipe(
      filter(res => res !== undefined && res !== null)
    ).subscribe((response: any) =>{
      this.productsdata = response;
      this.filteredProductList = this.productsdata
    });

  }

 // filtered products list will be initialized with all products
//  filteredProductList: ProductData[] = this.productsdata;


 filterdProducts(text: string) {


    if (text !== "") {
      this.filteredProductList = this.productsdata.filter(filteredList =>{
        const lowerCaseText = text.toLowerCase();
        const lowerCaseProductName = filteredList.name.toLowerCase();
        return lowerCaseProductName.includes(lowerCaseText);
      })
    } else {
      this.filteredProductList = this.productsdata;
    }
  }
}
