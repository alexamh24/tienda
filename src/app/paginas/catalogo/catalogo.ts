import { Component } from '@angular/core';
import { ProductosLista } from "../../components/productos-lista/productos-lista";

@Component({
  selector: 'app-catalogo',
  imports: [ProductosLista],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {

}
