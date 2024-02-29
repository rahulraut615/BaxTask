import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserupsertComponent } from './userupsert/userupsert.component';

const routes: Routes = [
  {path:'',component:UserupsertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
