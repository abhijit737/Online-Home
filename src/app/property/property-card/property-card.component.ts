import {Component, Input} from '@angular/core';
import { IProperty } from '../IProperty.interface';



@Component({
    selector:'app-property-card',

  //  template:`<h1> I am card</h1>`,
  templateUrl:'property-card.component.html',  
 
  //  styles: ['h1{font-weight:normal}']
  styleUrls:['property-card.component.css']
}
)


export class PropertyCardComponent{
  @Input()
  property!: IProperty;

// properties:any = {
//   "Id":1,
//   "Type":"Home",
//   "Price":12000
// }


}
