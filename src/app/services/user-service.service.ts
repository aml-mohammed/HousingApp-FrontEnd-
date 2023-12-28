import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }



adduser(user:User){

  let users = [];
    if(localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') as string);
    } 
    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users))
  
  
  // let users=[];
  //    users.push(user);
  //    if(localStorage.getItem('Users')){
  //         users=JSON.parse(localStorage.getItem('Users')!);
  //          users=[user,...users];
  // }
  // else{
  //  users=[user];
  // }
  // localStorage.setItem('Users',JSON.stringify(users));
}

}
