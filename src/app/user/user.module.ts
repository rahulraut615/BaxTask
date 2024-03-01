import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserupsertComponent } from './userupsert/userupsert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    UserupsertComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { 
  
}
