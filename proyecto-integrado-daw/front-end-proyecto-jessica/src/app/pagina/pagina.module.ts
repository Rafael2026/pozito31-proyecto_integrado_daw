import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PaginaRoutingModule } from './pagina-routing.module';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HermanomayorComponent } from './componentes/hermanomayor/hermanomayor.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NovenasComponent } from './componentes/novenas/novenas.component';
import { NuevohermanoComponent } from './componentes/nuevohermano/nuevohermano.component';
import { ParrocoComponent } from './componentes/parroco/parroco.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { PaginaComponent } from './pagina/pagina.component';


@NgModule({
  declarations: [CabeceraComponent, ContactoComponent, HermanomayorComponent, HistoriaComponent, ImagenesComponent, NoticiasComponent, NovenasComponent, NuevohermanoComponent, ParrocoComponent, PiePaginaComponent, TableroComponent, VideosComponent, PaginaComponent],
  exports: [
    PaginaRoutingModule
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    PaginaRoutingModule
  ]
})
export class PaginaModule { }
