import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserupsertComponent } from './userupsert/userupsert.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'',component:UserupsertComponent},
  {path:'userlist',component:UserlistComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: ':id', component: UserupsertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
