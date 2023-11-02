import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

import{PropertyData} from '../property/PropertyData.interface'
@Injectable({
  providedIn: 'root'
})
export class HousingService {

 
  constructor(private http: HttpClient) { }


  // getAllProperties():Observable<IProperty[]
  //  > {
  //   return this.http.get('data/properties.json').pipe(
  //     map(data => {

  //       const propertiesArray: Array<IProperty> = [];

  //       for (const id in data) 
  //       {
  //       if(data.hasOwnProperty(id))
  //       {

  //         propertiesArray.push(data[id]);
  //       }  
          
  //       }
  //       return propertiesArray;
  //     })
  //   );
  // }


  getAllProperties(SellRent:number): Observable<IProperty[]> {
    return this.http.get<PropertyData>('data/properties.json').pipe(
      map((data: PropertyData) => {
        const propertiesArray: IProperty[] = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent===SellRent ) {
             propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
  
}

