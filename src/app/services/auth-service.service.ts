import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

constructor() { }
authuser(user:any){
  let userarray=[];
  if(localStorage.getItem('Users')){
  userarray = JSON.parse(localStorage.getItem('Users') as string);
  }
  
  return userarray.find(m=>m.userName===user.userName && m.password===user.password);
  alert(user.userName.value);

}
}
