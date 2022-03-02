import { Component, OnInit } from '@angular/core';
import CartService from '../service/cart.service';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {

  openZoom = false;
  quantity = 0;
  price = 125;
  images = [
    {
      source: 'assets/images/image-product-1-thumbnail.jpg',
      inFocus:'assets/images/image-product-1.jpg',
      key: 'product1'
    },
    {
      source: 'assets/images/image-product-2-thumbnail.jpg',
      inFocus:'assets/images/image-product-2.jpg',
      key: 'product2'
    },
    {
      source: 'assets/images/image-product-3-thumbnail.jpg',
      inFocus:'assets/images/image-product-3.jpg',
      key: 'product3'
    },
    {
      source: 'assets/images/image-product-4-thumbnail.jpg',
      inFocus:'assets/images/image-product-4.jpg',
      key: 'product4'
    },

  ]
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }

  openZoomItem(){
    console.log('return value')
    this.openZoom = false;
  }

  sendCart(){
    if(this.quantity-1 > 0 ){
      console.log('enviando')
      this.cartService.setCart({
        img: this.images[0].source,
        quantity: this.quantity,
        price: this.price
      });
    }
  }

  addItem(){
    this.quantity++;
  }
  subItem(){
    this.quantity-1 >= 0? this.quantity--: '';
  }
}
