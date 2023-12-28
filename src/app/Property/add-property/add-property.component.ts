import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { IProperty } from '../../model/IProperty.interface';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
//@ViewChild('Form') addPropertyForm!:NgForm;
@ViewChild('formTabs') formTabs:MatTabGroup;
addPropertyForm!:FormGroup;
nextclicked:boolean;
property=new Property();


propertyTypes:Array<string>=['House','Appartment','douplex'];
//propertyTypes: Ikeyvaluepair[];
FurnishTypes:Array<string>=['fully','semi','unfurnished'];
MainEntranceValues:Array<string>=['east','west','north','south'];
prop:any={};
cityList:any[];

propertView:IPropertyBase={
  Id:null,
  Name:'',
  Price:null,
  SellRent:null,
  PType:null,
 FType:null,
  BHK:null,
  BuiltArea:null,
  City:'',
  RTM:null,




};
  constructor(private fb:FormBuilder
    ,private route:Router
    ,private housingserv:HousingService,
     private router:Router
    ) { }

  ngOnInit() {
    this.createAddPropertyForm();
    this.housingserv.getAllCities().subscribe({
  next:  data=>{
        this.cityList=data;
        console.log("data:" + data);
      }
    }
    );
  }
  createAddPropertyForm(){
    this.addPropertyForm=this.fb.group({
      BasicInfo:this.fb.group({
        PType:[null,Validators.required],
        FType:[null,Validators.required],
         SellRent:['1',Validators.required],
      BHK: [null, Validators.required],
      Name:[null,Validators.required],
    City:[null,Validators.required]})
     ,
     priceInfo:this.fb.group({
       Price:[null,Validators.required],
     BuiltArea:[null,Validators.required],
      Security:[0],
      Maintenance:[0],
      CarpetArea:[null]}),
     
     AddressInfo:this.fb.group({
      FloorNo:[null],
      TotalFloor:[null],
      Address:[null,Validators.required],
      LandMark:[null]


     }),
     OtherInfo:this.fb.group({
      readyToMove:[null,Validators.required],
      PostedOn:[null],
      AOP:[null],
      Gated:[null],
      Maintenance:[null],
      Description:[null],
      RTM:[null,Validators.required],
      PossessionOn:[null,Validators.required],
      MainEntrance:[null]
     })
     
  
      });
    }



  get BasicInfo(){
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }
  get OtherInfo(){
    return this.addPropertyForm.controls.OtherInfo as FormGroup;
  }
  get AddressInfo(){
    return this.addPropertyForm.controls.AddressInfo as FormGroup;
  }
  get PriceInfo(){
   // return this.addPropertyForm.controls.priceInfo as FormGroup;
   return this.addPropertyForm.controls['priceInfo'] as FormGroup;
  }
   get Price(){
    return this.PriceInfo.controls['Price'] as FormControl;
   }
   get Security(){
    return this.PriceInfo.controls['Security'] as FormControl;
   }
  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
   // return this.BasicInfo.get('SellRent') as FormControl;
}

get BHK() {
    return this.BasicInfo.get('BHK') as FormControl;
}

get PType() {
    return this.BasicInfo.get('PType') as FormControl;
}


get FType() {
    return this.BasicInfo.get('FType') as FormControl;
}

get Name() {
    return this.BasicInfo.get('Name') as FormControl;
}

get City() {
   // return this.BasicInfo.controls.City as FormControl;
   return this.BasicInfo.get('City') as FormControl;
}


get FloorNo() {
   return this.AddressInfo.controls['FloorNo'] as FormControl;
   //return this.BasicInfo.get('FloorNo') as FormControl;
}

get TotalFloor() {
   // return this.AddressInfo.controls.TotalFloor as FormControl;
   return this.AddressInfo.controls['TotalFloor'] as FormControl;
   
}

get Address() {
    //return this.AddressInfo.controls.Address as FormControl;
    return this.AddressInfo.get('Address') as FormControl;
}

get LandMark() {
   // return this.AddressInfo.controls.LandMark as FormControl;
   return this.AddressInfo.get('LandMark') as FormControl;
}

get RTM() {
    return this.OtherInfo.get('RTM') as FormControl;
}

get PossessionOn() {
    return this.OtherInfo.get('PossessionOn') as FormControl;
}

get AOP() {
    return this.OtherInfo.get('AOP') as FormControl;
}

get Gated() {
    return this.OtherInfo.get('Gated') as FormControl;
}

get MainEntrance() {
    return this.OtherInfo.get('MainEntrance') as FormControl;
}

get Description() {
    return this.OtherInfo.get('Description') as FormControl;
}
get BuiltArea(){
  return this.PriceInfo.get('BuiltArea') as FormControl;
}

get Maintenance(){
  return this.OtherInfo.get('Maintenance') as FormControl;
}
get CarpetArea(){
  return this.PriceInfo.get('CarpetArea') as FormControl;
}


    ///getter method/////////
    
  getBack(){
    this.route.navigate(['/']);
  }

  onSubmit(){
   this.nextclicked=true;
  this.mapProperty();
   //alert(this.SellRent.value);
  //  alert(this.PriceInfo.controls['Price'].value);
  //  alert(this.City.value);
  this.prop=Object.assign(this.prop,this.addPropertyForm.value);
  
  
    //this.housingserv.addproperty(this.prop);
    this.housingserv.addproperty(this.property);
    

   // alert("your property add successfully to our website");
    if(this.SellRent.value ==='2'){
      this.route.navigate(['/Rent-property']);
    }
    else
    {
      this.route.navigate(['/']);
    }

    // if(this.BasicInfo.invalid){
    //   this.formTabs._tabs[0].active=true;
    //   return;
    //    }
    //    if(this.PriceInfo.invalid){
    //     this.formTabs._tabs[1].active=true;
    //     return;
    //      }
    //      if(this.AddressInfo.invalid){
    //       this.formTabs._tabs[2].active=true;
    //       return;
    //        }
    //        if(this.OtherInfo.invalid){
    //         this.formTabs._tabs[3].active=true;
    //         return;
    //          }
   

  }

  mapProperty(): void {

    this.property.Id = this.housingserv.newPropID();
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
   this.property.propertyTypeId = this.PType.value;
    this.property.Name = this.Name.value;
    this.property.CityId = this.City.value;
    this.property.furnishingTypeId = this.FType.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
     this.property.maintenance = this.Maintenance.value;
     this.property.BuiltArea = this.BuiltArea.value;
     this.property.carpetArea = this.CarpetArea.value;
     this.property.FloorNo = this.FloorNo.value;
     this.property.TotalFloors = this.TotalFloor.value;
     this.property.address = this.Address.value;
     this.property.address2 = this.LandMark.value;
     this.property.RTM = this.RTM.value;
     this.property.Gated = this.Gated.value;
     this.property.maintenance = this.MainEntrance.value;
     this.property.estPossessionOn =new Date().toString();
      //  this.datePipe.transform(this.PossessionOn.value,'MM/dd/yyyy');
    this.property.description = this.Description.value;
}

  selectTab(tabId:number,iscurrenttabvalid:boolean){
    this.nextclicked=true;
   // if(iscurrenttabvalid)

  //  this.formTabs._tabs[tabId].active=true;
  }
}
