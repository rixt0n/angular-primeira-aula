import { Injectable } from '@angular/core';
import { MockAlunos } from './mock-alunos';
import { Aluno } from './aluno';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AlunosServiceService {
  // private ALUNOS:Aluno[];
  //private alunoSeleccionado:Aluno;
  //utilizando observable
  private alunoSeleccionado = new BehaviorSubject(null); 
  private urlAPI = "https://randomuser.me/api/?seed=11-18&results=20";

  constructor(private http: HttpClient) {
    // this.ALUNOS = MockAlunos;
   }

  // getAlunos(): Aluno[]{
  //   return this.ALUNOS;
  // }
  
  //utilizando o observable
  getAlunos(): Observable<Aluno[]>{
    //  return of(this.ALUNOS);
     return this.http.get<Aluno[]>(this.urlAPI );
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