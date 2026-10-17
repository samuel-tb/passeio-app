import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing-module';
import { Categoria } from './categoria/categoria';


@NgModule({
  declarations: [
    Categoria
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule // formulario reativo fica observando as mudnaças do formulário
  ]
})
export class CategoriasModule { }
