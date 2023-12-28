import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/IProperty.interface';
import { Property } from '../model/Property';
import { IPropertyBase } from '../model/IPropertyBase';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllCities() : Observable<string[]>{
    return this.http.get<string[]>('http://localhost:5120/api/City');
  }

  getProperty(id: number) {
    return this.getAllProperties().pipe(map(
      propertiesArray=>{
        //throw new Error('some error');
        return propertiesArray.find(p=>p.Id===id);
      }
    ));
   
   // return this.http.get<Property>(this.baseUrl + '/property/detail/'+id.toString());
}

  getAllProperties(SellRent?:number):Observable<Property[]>{
   return this.http.get('assets/data/property.json')
   .pipe(
    map(
      data=>{
        const propertiesArray:Array<Property>=[];
        const localproerties=JSON.parse(localStorage.getItem('newprop') as string);
        console.log(localproerties);

        if(localproerties){
          for(const id in localproerties ){
            if(SellRent){
            if(localproerties.hasOwnProperty(id) && localproerties[id].SellRent===SellRent){
              propertiesArray.push(localproerties[id]);
            }
          }
          else{
            propertiesArray.push(localproerties[id]);
          }
          }
        }
        for(const id in data ){

       if(SellRent){  
        if(data.hasOwnProperty(id) && data[id].sellRent===SellRent){
            propertiesArray.push(data[id]);
          }
        }
        else{
          propertiesArray.push(data[id]);
        }
        }
        console.log(propertiesArray);
        return propertiesArray;
      })

   );
   return this.http.get<Property[]>('data/property.json');
  }



  addproperty(property:Property){
      let newprop=[property];
    
    if(localStorage.getItem('newprop')) {
      newprop = JSON.parse(localStorage.getItem('newprop') as string);
     // newprop=[property, ...JSON.parse(localStorage.getItem('newprop'))];
     
    } 
   newprop.push(property);
  
    localStorage.setItem('newprop',JSON.stringify(newprop));

  }


  newPropID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID',String(+localStorage.getItem('PID')+1));
      return +localStorage.getItem('PID');
    }
    else{
      localStorage.setItem('PID','101');
      return 101;
  }
  }

}
