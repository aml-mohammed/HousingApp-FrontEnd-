import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../../model/IProperty.interface';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() Property :IPropertyBase;
  @Input() hideIcons: boolean;
  
   
}
