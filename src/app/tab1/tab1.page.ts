import { Component, OnInit } from '@angular/core';
import { AskoService } from '../asko.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  hola: string = 'WENA PERROOOO';
  constructor(
    private service: AskoService
  ) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.traerDatos();
}
async traerDatos () {
  let response = await this.service.TraerTodos();
  console.log(response);
  

}
}
