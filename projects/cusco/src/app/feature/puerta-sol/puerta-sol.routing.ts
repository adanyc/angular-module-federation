import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuertaSolComponent } from './views/puerta-sol.component';

const routes: Routes = [
  {
    path: '',
    component: PuertaSolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuertaSolRoutingModule { }
