import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'machu-pichu',
        pathMatch: 'full',
      },
      {
        path: 'machu-pichu',
        loadChildren: () => import('./feature/machu-pichu/machu-pichu.module').then(m => m.MachuPichuModule)
      },
      {
        path: 'puerta-sol',
        loadChildren: () => import('./feature/puerta-sol/puerta-sol.module').then(m => m.PuertaSolModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
