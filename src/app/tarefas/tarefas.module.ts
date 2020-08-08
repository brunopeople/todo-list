import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService} from './shared';
import { ListarTarefaComponent} from './listar';
import {RouterModule, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ 
    ListarTarefaComponent
  ],
  providers:[
    TarefaService
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TarefasModule { }
