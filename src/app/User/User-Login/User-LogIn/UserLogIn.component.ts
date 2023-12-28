import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-UserLogIn',
  templateUrl: './UserLogIn.component.html',
  styleUrls: ['./UserLogIn.component.css']
})
export class UserLogInComponent implements OnInit {

  constructor(private loginservice:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }
  onlogin(loginform:NgForm){
   
    
     const token=  this.loginservice.authuser(loginform.value);
    // alert(loginform.value.userName);
      if(token){
      localStorage.setItem('token',token.userName);
     //  alert('login successed');
       this.router.navigate(['/']);
   }
  else alert("unssucceful login");
  }
}
