import { Component, OnInit } from '@angular/core';
import { AskoService } from '../asko.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  datos = []
  constructor(
    private service: AskoService
  ) { }
  ngOnInit(): void {

    this.traerDatos();

  }
  async traerDatos() {
    let response = await this.service.TraerTodos();
    response.forEach(item => {
      this.datos.push(item)
    });
  }

  ImprimirInfo(item) {
    //TODO
    //abrir modal o algo con la info de la variable item
    console.log("preciono imagen")
    console.log(item)

  }

  // MostrarInfo(item) {

  // }
}
