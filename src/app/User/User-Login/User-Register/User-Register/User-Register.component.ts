import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlOptions, FormGroup, FormGroupName, ValidationErrors, Validators } from '@angular/forms';
import { loadTranslations } from '@angular/localize';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-User-Register',
  templateUrl: './User-Register.component.html',
  styleUrls: ['./User-Register.component.css']
})
export class UserRegisterComponent implements OnInit {

  // signUpUsers:any[]=[];
  // signupobj:any={
  //   username:'',
  //   email:'',
  //   password:'',
  // phone:0
  // };
   registerationForm!:FormGroup;
   //user:any={}
    user!:User;
    usersubmitted!:boolean;
  constructor(private fb:FormBuilder, private userservice:UserServiceService) { }

  ngOnInit() {
 
  this.createRegistrationForm();
  
  }  

  // onsignup(){
  //   this.signUpUsers.push(this.signupobj);
  //   localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
  //   this.signupobj={
  //     username:'',
  //     email:'',
  //     password:'',
  //     phone:0
  //   }
  // }

  createRegistrationForm(){
    this.registerationForm=this.fb.group({
    userName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.maxLength(6)]],
    confirmedpassword:['',Validators.required],
    phone:['',Validators.required,Validators.maxLength(10)]

    },{Validators:this.passwordMatchingValidator} as FormControlOptions)
  }
    // passwordmatchingvalidator(fg:FormGroup):Validators{
    //   return fg.get('password')?.value===fg.get('confirmedpasswor')?.value ? null :
    //   {notmatched:true}
    // }
    passwordMatchingValidator(fc: FormControl): ValidationErrors | null {
      return fc.get('password')?.value === fc.get('confirmedpassword')?.value ? null :
        { notmatched: true }
    }
    


   
   get userName(){
    return this.registerationForm.get('userName') as FormControl

   }
   get email(){
    return this.registerationForm.get('email') as FormControl

   }
   get password(){
    return this.registerationForm.get('password') as FormControl

   }
   get confirmedpassword(){
    return this.registerationForm.get('confirmedpassword') as FormControl

   }
   get phone(){
    return this.registerationForm.get('phone') as FormControl

   }
  onsubmit(){
    alert('error')
    //console.log(this.registerationForm.value);
    this.usersubmitted=true;
    if(this.registerationForm.valid){
 //  this.user=Object.assign(this.user,this.registerationForm.value);
   // localStorage.setItem('Users',JSON.stringify(this.user));
    this.userservice.adduser(this.userData());
    this.registerationForm.reset();
    this.usersubmitted=false;
    }
  
  }
  
  userData(): User{
    return this.user={
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      phone:this.phone.value
    }

  }
  
}
