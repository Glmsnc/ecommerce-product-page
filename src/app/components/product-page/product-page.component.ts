import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {

  openZoom = false;
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
  constructor() { }

  ngOnInit(): void {
  }

}
