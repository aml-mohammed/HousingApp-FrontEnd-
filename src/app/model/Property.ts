import { IPropertyBase } from "./IPropertyBase";

export class Property implements IPropertyBase{
    Id: number;
    SellRent: number;
    Name: string;
    propertyTypeId: number;
    PType: string;
    BHK: number;
    furnishingTypeId: number;
    FType: string;
    Price: number;
    BuiltArea: number;
    carpetArea?: number;
    address: string;
    address2?: string;
    CityId: number;
    City: string;
    FloorNo?: string;
    TotalFloors?: string;
    RTM: number;
    AOP?:string;
    MainEntrance?: string;
    Security?: number;
    Gated?: boolean;
    maintenance?: number;
    estPossessionOn?: string;
    Image?: string;
    description?: string;
    PostedOn:string;
    PostedBy:Number;
}