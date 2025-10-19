import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  @Input() productoNombre! : string
  @Input() productoPrecio! : number
  @Input() productoImg! : string
}
