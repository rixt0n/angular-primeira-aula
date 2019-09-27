import { Component, OnInit } from '@angular/core';
import {Aluno} from '../aluno';
import {MockAlunos} from '../mock-alunos';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos:Aluno[] = MockAlunos;
  alunoSelecionado:Aluno;
  constructor() { 
   
    
  }

  ngOnInit() {
  }

  selecionarAluno(aluno){
    this.alunoSelecionado = aluno;
  }

}