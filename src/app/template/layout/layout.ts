import { Component,  OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthgoogleService } from '../../authgoogle.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  props: LayoutProps = { titulo: '12', subTitulo: '412' };

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loginService: AuthgoogleService
  ){}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter( () => this.activateRoute.firstChild !== null ), // filtrar para pegar a rota onde o filho dela não é nulo
        map( () => this.obterPropriedadeLayout() )
      ).subscribe((props: LayoutProps) => this.props = props) // seta as propriedades da rota ativada
  }

  obterPropriedadeLayout(): LayoutProps{
    let rotaFilha = this.activateRoute.firstChild;
    
    while(rotaFilha?.firstChild){
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as LayoutProps;
  }

  logout(){
    this.loginService.logout();
  }
}
