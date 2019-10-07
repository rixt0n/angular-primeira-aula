import { Component, OnInit, Input } from '@angular/core';
import {Aluno} from '../aluno';
import {AlunosServiceService} from '../alunos-service.service';
@Component({
  selector: 'app-detalhes-aluno',
  templateUrl: './detalhes-aluno.component.html',
  styleUrls: ['./detalhes-aluno.component.css']
})
export class DetalhesAlunoComponent implements OnInit {
  @Input() aluno :Aluno;
  alunoAsync:Aluno;

  constructor(private alunosService:AlunosServiceService) { 
  
    

  }

  ngOnInit() {
    //this.getAluno();
    this.getAluno();
  }


  // //utilizando observable
  getAluno() {

     this.alunosService.getAluno().subscribe(data => this.alunoAsync = data);
  }

}