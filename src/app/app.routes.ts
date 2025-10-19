import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Catalogo } from './paginas/catalogo/catalogo';
import { Acerca } from './paginas/acerca/acerca';

export const routes: Routes = [
    {
        path : " ",
        component : Inicio
    },
    {
        path : "catalogo",
        component : Catalogo
    },
    {
        path : "acerca",
        component : Acerca
    }
];
