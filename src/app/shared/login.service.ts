import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  public loginVerify(user: Login){
    //calling api for check username pass
    return this.httpClient.get<Login>(environment.apiUrl+'/api/Users/' + user.UserName + '/' +user.Password)
  }

  // //logout function
  // public logOut(){
  //   sessionStorage.removeItem('username');
  //   sessionStorage.removeItem('RoleId');
  // }

}
