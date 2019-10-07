import { Injectable } from '@angular/core';
import { MockAlunos } from './mock-alunos';
import { Aluno } from './aluno';
import {Observable, of, BehaviorSubject} from 'rxjs';


@Injectable()
export class AlunosServiceService {
  private ALUNOS:Aluno[];
  //private alunoSeleccionado:Aluno;

  //utilizando observable
  private alunoSeleccionado = new BehaviorSubject(null); 
  constructor() {
    this.ALUNOS = MockAlunos;
   }

  // getAlunos(): Aluno[]{
  //   return this.ALUNOS;
  // }
  
  //utilizando o observable
  getAlunos(): Observable<Aluno[]>{
     return of(this.ALUNOS);
  }
   //utilizando o observable
  getAluno():Observable<Aluno> {
    return this.alunoSeleccionado;
  }

  // getAluno(index):Aluno {
  //   return this.ALUNOS[index];
  // }

 setAluno(aluno): Aluno {    
    this.alunoSeleccionado.next(aluno);
  }
}