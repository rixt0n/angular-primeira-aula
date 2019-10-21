import { Component, OnInit, Input } from '@angular/core';
import {Aluno} from '../aluno';
import {AlunosServiceService} from '../alunos-service.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhes-aluno',
  templateUrl: './detalhes-aluno.component.html',
  styleUrls: ['./detalhes-aluno.component.css']
})
export class DetalhesAlunoComponent implements OnInit {
  // @Input() aluno :Aluno;
  alunoAsync:Aluno;
  alunoId: number;

  // constructor(private alunosService:AlunosServiceService) { 
  // }

  constructor(private route: ActivatedRoute, private alunosService: AlunosServiceService){}

  // ngOnInit() {
  //   //this.getAluno();
  //   this.getAluno();
  // }

ngOnInit(){

  this.alunosService.getAluno().subscribe(aluno => this.alunoAsync = aluno);

  

}

  // //utilizando observable
  getAluno() {

     this.alunosService.getAluno().subscribe(data => this.alunoAsync = data);
  }

}