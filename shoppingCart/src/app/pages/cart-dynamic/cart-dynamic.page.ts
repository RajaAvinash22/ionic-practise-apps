import { CartDynamicService } from './../../services/cart-dynamic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-dynamic',
  templateUrl: './cart-dynamic.page.html',
  styleUrls: ['./cart-dynamic.page.scss'],
})
export class CartDynamicPage implements OnInit {

  selectedItems = [];

  total = 0;

  constructor(private cartServiceD: CartDynamicService) { }

  ngOnInit() {
    let items = this.cartServiceD.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
        console.log(selected[obj.id]);
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

}
