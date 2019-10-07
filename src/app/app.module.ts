import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TurmaComponent } from './turma/turma.component';
import { AlunoComponent } from './aluno/aluno.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';
import { AlunosServiceService } from './alunos-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TurmaComponent, AlunoComponent, DetalhesAlunoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AlunosServiceService]
})
export class AppModule { }
