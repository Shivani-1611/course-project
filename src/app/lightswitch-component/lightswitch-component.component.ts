import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch-component',
  template: 
  `<button type="button" (click)="clicked()">Click Me!</button>
  <br>
  <span>{{message}}</span>`
 
})
export class LightswitchComponentComponent  {
  isOn = true;
  clicked(){this.isOn = !this.isOn; }

  get message(){ return `The light is ${this.isOn ? 'On': 'off'}`;}

  constructor() { }

  ngOnInit(): void {
  }

}
