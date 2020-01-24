import { CartDynamicService } from './../../services/cart-dynamic.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-dynamic',
  templateUrl: './home-dynamic.page.html',
  styleUrls: ['./home-dynamic.page.scss'],
})
export class HomeDynamicPage implements OnInit {

  cart = [];
  items = [];

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router, private cartServiceD: CartDynamicService) { }

  ngOnInit() {
    this.items = this.cartServiceD.getProducts();
    this.cart = this.cartServiceD.getCart();
    console.log(this.items);
  }

  addToCart(product) {
    this.cartServiceD.addProduct(product);
    console.log(product);
  }

  openCart() {
    this.router.navigate(['cart-dynamic']);
  }

}
