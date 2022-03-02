import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.less']
})
export class CheckoutCardComponent implements OnInit {
  @Input() show = false;
  unityPrice = 125;
  quantity = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
