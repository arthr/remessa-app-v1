import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemessaComponent } from './remessa/remessa.component';

const routes: Routes = [
  { path: 'remessa', component: RemessaComponent },

  {
    path: '',
    redirectTo: '/remessa',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
