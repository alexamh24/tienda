import { Component, OnInit } from '@angular/core';
import { Db, producto } from '../../db';
import { ProductoCard } from '../producto-card/producto-card';

@Component({
  selector: 'app-productos-lista',
  imports: [ProductoCard],
  templateUrl: './productos-lista.html',
  styleUrl: './productos-lista.css'
})

export class ProductosLista implements OnInit{
  baseDeDatos = new Db()
  datos: producto[] = []
  ngOnInit(){
    this.datos = this.baseDeDatos.getProducto()
  }
}
