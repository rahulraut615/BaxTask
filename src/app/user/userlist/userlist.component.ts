import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users : any;     // to store user data
  constructor(private dataService : DataserviceService){

  }
  ngOnInit(): void {
    this.loadData();  //LoadData() Call
  }
  loadData(){      //When User Added Or Updated data this will refresh the table 
    this.dataService.getUserData().subscribe(res=>{
      this.users = res;  
    })
  }
 
  deleteUser(id:string){
    this.dataService.deleteUser(id).subscribe(res=>{
      // console.log('delted user',res);    // for console wich data deleted
      this.loadData();  ////LoadData() Call
    })
  }
 
}
