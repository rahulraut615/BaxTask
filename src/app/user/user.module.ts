import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserupsertComponent } from './userupsert/userupsert.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserupsertComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { 
  
}
