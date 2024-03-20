import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  @ViewChild('myForm') myFormobj : any;
  selectedMethod:string | undefined;


  onclick(){
    console.log(this.myFormobj.value)
    this.myFormobj.reset()
  }

}
