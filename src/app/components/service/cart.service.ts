import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export default class CartService{

    get cart$() { return this.cart.asObservable(); }
    private cart =  new BehaviorSubject({quantity: 0, price: 0});

    setCart(value: any){
        this.cart.next(value);
    }
}
