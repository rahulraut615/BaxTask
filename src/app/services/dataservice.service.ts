import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/userData'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   apiUrl = "http://localhost:3000/users"
  constructor(private http:HttpClient) { }

  getUserData() : Observable<User[]> {     // get all users data
     return this.http.get<User[]>(this.apiUrl)
  }
  postUserData(data:User) : Observable<any>{   // add new user
    return this.http.post(this.apiUrl,data)
  }
  getUser(id:string) :Observable<User>{   // to get specific user
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }
  updateUser(id:string,data:User) : Observable<any>{  // update specific user by id
    let url= `${this.apiUrl}/${id}`
    return this.http.put(`${url}`,data)
  }
  deleteUser(id:string) : Observable<any>{     // delete user by id
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
