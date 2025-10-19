import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenu } from "./header-menu/header-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda');
}
