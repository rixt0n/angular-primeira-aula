//Zona do comportamento

import { Component, OnInit } from '@angular/core';
import {Turma} from '../turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turmaCorrente:Turma = {

    nome:"TPSI",
    descricao:"Turma de programação",
    nivel:5

  };
  /*nomeTurma:string = "TPSI";
  descricao:string = "Turma de progrmação da Atec";
  nivel:number = 42;*/
  constructor() { }

  ngOnInit() {
  }

}