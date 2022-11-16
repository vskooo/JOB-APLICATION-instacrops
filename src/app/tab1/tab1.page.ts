import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AskoService } from '../asko.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  datos = []
  constructor(
    private service: AskoService,
    private router: Router
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
    console.log(item)
    this.router.navigateByUrl('/detalles', {state:item})
  }

  // MostrarInfo(item) {

  // }
}
