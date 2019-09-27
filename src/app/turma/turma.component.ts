//Zona do comportamento

import { Component, OnInit } from '@angular/core';
import {Turma} from '../turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  editar:boolean;
  turmaCorrente:Turma;
  /*nomeTurma:string = "TPSI";
  descricao:string = "Turma de progrmação da Atec";
  nivel:number = 42;*/
  constructor() { 
    this.turmaCorrente = {
      nome:"tpsi",
      descricao:"a turma maior",
      nivel: 5,
    };
    this.editar = true;
  }

  ngOnInit() {
  }
  mudarEditar(){
    this.editar = !this.editar;
  }

}