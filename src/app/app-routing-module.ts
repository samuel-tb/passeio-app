import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { authGuard } from './auth-guard';

const routes: Routes = [
  {
    path: '',
    component: Landingpage
  },
  {
    // importando o templateModule
    // m representa o arquivo do modelo, e dentro do arquivo tem o templateModule
    // todas as rotas que declarar no template-routing-module vai puxar aqui
    // ele importa o modelo porque o template-routing-module ja ta dentro do template module
    path: 'paginas',
    loadChildren: () => import('./template/template-module').then(m => m.TemplateModule),
    canActivate: [ authGuard ] // verificar se está autenticado para acessar a rota   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
