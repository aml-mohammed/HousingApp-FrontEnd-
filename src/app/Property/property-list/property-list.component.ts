
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../../model/IProperty.interface';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent=1;
  Properties:IPropertyBase[];
  Today=new Date();
  City='';
  serchCity='';
  SortByParam='';
  SortDirection='asc';


  constructor(private housingserv:HousingService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2; // in rent property else in base url
    }
    let propertlist = [];
      this.housingserv.getAllProperties(this.SellRent).subscribe({
       next: (data)=>{
         this.Properties=data;
         const newProperty=JSON.parse(localStorage.getItem('newprop')as string);
         if(newProperty.SellRent==this.SellRent){
              //  this.Properties=[newProperty,...this.Properties];
              this.Properties.push(newProperty);
         }
         if(localStorage.getItem('newprop')){
          this.Properties.push(newProperty);

         }
      console.log(data);
       },
         error: (error)=>{
          console.log('httperror:');
         console.log(error);}
         } 
    
  );
  
    // this.http.get('assets/data/property.json').subscribe(
    //   data=>{
    //     this.Properties=data,
    //     console.log(data);
    //   }
    //     );
      
  }
  onCityFilter(){

    this.serchCity=this.City;
  }
  onCityFilterlear(){
    this.serchCity='';
    this.City='';
  }
  OnSortingDirection(){
    if(this.SortDirection==='desc'){
         this.SortDirection='asc';}
         else{ this.SortDirection='desc'}

  }
  
}
