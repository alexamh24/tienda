import { Routes } from '@angular/router';
import { Acerca } from './paginas/acerca/acerca';
import { Catalogo } from './paginas/catalogo/catalogo';
import { Inicio } from './paginas/inicio/inicio';
import { Usuarios } from './usuarios/usuarios';

export const routes: Routes = [
    {
        path : "",
        component : Inicio
    },
    {
        path : "catalogo",
        component : Catalogo
    },
    {
        path : "acerca",
        component : Acerca
    },
    {
        path : "usuarios",
        component : Usuarios
    }
];