import { Component , OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userupsert',
  templateUrl: './userupsert.component.html',
  styleUrls: ['./userupsert.component.css']
})
export class UserupsertComponent implements OnInit{
  userForm!: FormGroup
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstname:  ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastname:  ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['',[Validators.required]],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }
onSubmit(){

}


}
