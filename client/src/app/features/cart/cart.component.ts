import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSumaryComponent } from "../../shared/components/order-sumary/order-sumary.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, OrderSumaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService)
}
