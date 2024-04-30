import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'esque',
    loadChildren: () => import('./sections/esque/esque.module').then( m => m.EsquePageModule)
  },
  {
    path: 'conduc',
    loadChildren: () => import('./sections/conduc/conduc.module').then( m => m.ConducPageModule)
  },
  {
    path: 'codigos',
    loadChildren: () => import('./sections/codigos/codigos.module').then( m => m.CodigosPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'codigos',
    loadChildren: () => import('./sections/codigos/codigos.module').then( m => m.CodigosPageModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./sections/loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'aulas',
    loadChildren: () => import('./sections/aulas/aulas.module').then( m => m.AulasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
