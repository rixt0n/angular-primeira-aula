import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TurmaComponent } from './turma/turma.component';
import { AlunoComponent } from './aluno/aluno.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';
import { AlunosServiceService } from './alunos-service.service';

import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
        { path: '', component: AlunoComponent },
        { path: 'alunos/:alunoId', component: DetalhesAlunoComponent },
        { path: 'alunos', component: AlunoComponent}
      ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, TurmaComponent, AlunoComponent, DetalhesAlunoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AlunosServiceService],
  exports: [ RouterModule ]
})
export class AppModule { }
