import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/userData';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-userupsert',
  templateUrl: './userupsert.component.html',
  styleUrls: ['./userupsert.component.css']
})
export class UserupsertComponent implements OnInit {
  userForm!: FormGroup
  isHidden = true;
  getUserData!: User
  id: any
  constructor(
    private fb: FormBuilder,
    private dataService: DataserviceService, // this service used to perform curd opration on user
    private route: ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');  //  for catch navigated id

    if (this.id !== null) {
      this.isHidden = false;    
      this.dataService.getUser(this.id).subscribe(res => {  // navigated id gets user details by id
        this.getUserData = res;
        // console.log("this is user data", this.getUserData.address)
        this.setData();
      })
    }
    this.userForm = this.fb.group({   //this is initilization of form using validators
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

    });
  }
  onSubmit() {
    this.dataService.postUserData(this.userForm.value).subscribe(res => {  // for post data
      // console.log(res)
      this.userForm.reset()  // reset form fields
    })
  }
  onUpdate() {  // calling updateUser from dataServive
    let id = this.getUserData.id;
    let data = this.userForm.value
    // console.log("on Update Clicked",id, "  this is form",data)
    this.dataService.updateUser(id, data).subscribe(res => {
      // console.log("updated data",res)
      this.navigateToList()
    })
  }

  setData() {       // this method used to patch form by subcribed data
    this.userForm.patchValue({
      firstname: this.getUserData.firstname,
      lastname: this.getUserData.lastname,
      email: this.getUserData.email,
      address: this.getUserData.address,
      mobilenumber: this.getUserData.mobilenumber
    });
  }

  navigateToList(){  // after update data navgate to userList Component
    this.router.navigate(['/userupsert/userlist'])
  }
}
