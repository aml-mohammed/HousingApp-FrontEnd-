import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';
//@import "@coreui/coreui/scss/coreui";
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {


  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  public propertyId:number;
  property:Property = new Property();

  constructor(private route:ActivatedRoute,private router:Router,private housingserv:HousingService) { }

  ngOnInit() {



    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }
  //  debugger

    this.propertyId=+this.route.snapshot.params['id'];

    this.route.data.subscribe(
      (data:Property)=>{
        this.property=data['prp'];
      }
    );
    // this.route.params.subscribe(
    //   (params)=>{
    //     this.propertyId= +params['id'];
    //     this.housingserv.getProperty(this.propertyId).subscribe(
    //       (data:Property)=>{
    //         this.property=data;
    //       },
    //       error=>this.router.navigate(['/'])
          
    //     )
    //   }
    // )
  }
  // onselectNext(){
  //   this.propertyId+=1;
  //   this.router.navigate(['property-details' , this.propertyId]);
  // }
}
