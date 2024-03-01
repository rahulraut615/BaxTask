import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'userupsert',loadChildren: () => import('./user/user.module').then(m=> m.UserModule)},
  {path:'userlist',loadChildren: () => import('./user/user.module').then(m=> m.UserModule)},
  // here used lazyLoading apporch for on demand module loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
