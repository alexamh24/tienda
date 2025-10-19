import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoCard } from './components/producto-card/producto-card';
import { ProductosLista } from "./components/productos-lista/productos-lista";
import { HeaderMenu } from "./header-menu/header-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductoCard, ProductosLista, HeaderMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda');
}
