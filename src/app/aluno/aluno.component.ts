import { Component, OnInit } from '@angular/core';
import {Aluno} from '../aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos:Aluno[];
 
  constructor() { 
    this.alunos = [
      {nome:"Ambrosio1",
      idade:31,
      email: "amb1@mail.com",
      distrito:"porto1"
      },
      {nome:"Ambrosio2",
      idade:22,
      email: "amb2@mail.com",
      distrito:"porto2"
      },
      {nome:"Ambrosio3",
      idade:13,
      email: "amb3@mail.com4",
      distrito:"porto3"
      },
      {nome:"Ambrosio5",
      idade:33,
      email: "amb4@mail.com",
      distrito:"porto4"
      },
      
      ]
    
  }

  ngOnInit() {
  }

}