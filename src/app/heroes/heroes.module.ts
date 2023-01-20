import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [ListadoComponent],
  exports: [ListadoComponent],
  imports: [CommonModule],
  providers: [],
})
export class HeroesModule { }
