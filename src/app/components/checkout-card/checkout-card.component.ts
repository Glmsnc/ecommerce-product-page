import { Component, Input, OnInit } from '@angular/core';
import CartService from '../service/cart.service';

@Component({
  selector: 'checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.less']
})
export class CheckoutCardComponent implements OnInit {
  @Input() show = false;
  unityPrice = 0;
  quantity = 0;
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe((item: any)=>{
      console.log('teste')
        this.unityPrice = item?.price;
        this.quantity = item?.quantity;
    })
  }

}
