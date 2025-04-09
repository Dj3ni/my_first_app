import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public finalTime! : Date; // permet de signifier qu'on va attribuer une valeur plus tard
  public time : number
  public finalHour : string

  constructor() {
    this.finalHour = formatDate(new Date(),'hh:mm','en' );
    this.setFinalTime();    
    this.time = this.getDelta();


    setInterval(
      ()=> this.time = this.getDelta(),
      1000
    )

  }

  public getDelta(): number{
    let now: number = new Date().getTime();
    return Math.floor((this.finalTime.getTime() - now) / 1000);
  }

  public setFinalTime():void{
    this.finalTime = new Date();
    this.finalTime.setHours(parseInt(this.finalHour.substring(0,2)));
    this.finalTime.setMinutes(parseInt(this.finalHour.substring(3,5)));
    this.finalTime.setSeconds(0);
  }

}
