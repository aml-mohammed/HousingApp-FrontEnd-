import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sign-up',
  templateUrl: './Sign-up.component.html',
  styleUrls: ['./Sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signUpUsers:any[]=[];
  signupobj:any={
    username:'',
    email:'',
    password:''
  }
  loginobj:any={
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit() {
    const localdata=localStorage.getItem('signUpUsers');
    if(localdata!=null)
    this.signUpUsers=JSON.parse(localdata);
  }
  onsignup(){
    this.signUpUsers.push(this.signupobj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
    this.signupobj={
      username:'',
      email:'',
      password:''
    }
  }
  onlogin(){
    const isuserexist=this.signUpUsers.find(m=>m.username==this.loginobj.username && m.password==this.loginobj.password);
    if(isuserexist !=undefined)
    alert("loginSuccessfully");
    else
    alert("worng data");

  }
}
