import { Component, OnInit } from '@angular/core';
import CartService from '../service/cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  checkoutShow = false;
  quantity = 0;
  sideMenu = false;
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(
        item => this.quantity = item.quantity
    );
  }

}
