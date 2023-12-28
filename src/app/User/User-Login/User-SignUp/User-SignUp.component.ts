import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-User-SignUp',
  templateUrl: './User-SignUp.component.html',
  styleUrls: ['./User-SignUp.component.css']
})
export class UserSignUpComponent implements OnInit {
  registerationForm!:FormGroup;
  user:any={};
  usersubmitted:boolean;
  constructor(private fb:FormBuilder,private userservice:UserServiceService) { }


  ngOnInit() {
    this.createRegistrationForm();
  
  }
  createRegistrationForm(){
    this.registerationForm=this.fb.group({
    userName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.maxLength(6)]],
    confirmedpassword:['',Validators.required],
    phone:['',Validators.required,Validators.maxLength(10)]

    },{Validators:this.passwordMatchingValidator} as FormControlOptions)
  }
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
    this.usersubmitted=true;
   // let users=[];
   //if(this.registerationForm.valid){
    this.user=Object.assign(this.user,this.registerationForm.value);
    this.userservice.adduser(this.user);
   // this.addUser(this.user);
  
    this.registerationForm.reset();
    this.usersubmitted=true;
   //}

   //else alert('error');

  }

  // addUser(user: any) {
  //   let users = [];
  //   if(localStorage.getItem('Users')) {
  //     users = JSON.parse(localStorage.getItem('Users') as string);
  //   } 
  //   users.push(user);
  //   localStorage.setItem('Users', JSON.stringify(users))
  // }
}
