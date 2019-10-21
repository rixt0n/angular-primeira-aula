import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import {AlunosServiceService} from '../alunos-service.service';



@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos:Aluno[];

  alunoSeleccionado:Aluno;
  constructor(private alunosService:AlunosServiceService) { 
   
    
  }

  ngOnInit() {
    this.getAlunos();
  }
  // seleccionarAluno(index){
  //   this.alunoSeleccionado = this.alunosService.getAluno(index);
  // }

  //  seleccionarAluno(index){
  //   this.alunosService.setAluno(index);
  // }

  seleccionarAluno(aluno){
    this.alunosService.setAluno(aluno);
  }

  // getAlunos(){
  //   this.alunos = this.alunosService.getAlunos();
  // }

  //codigo em baixo e para utilizar o observable
//   getAlunos(){
//     this.alunosService.getAlunos()
//       .subscribe(alunos => this.alunos = alunos); //o segundo alunos pode ser o que quisermos, ou seja associamos alunos a dados
//  }

getAlunos(){
    this.alunosService.getAlunos()
      .subscribe(alunos => this.alunos = alunos.results); //o segundo alunos pode ser o que quisermos, ou seja associamos alunos a dados
 }

}