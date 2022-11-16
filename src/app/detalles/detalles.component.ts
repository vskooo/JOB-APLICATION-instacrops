import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  datos: any
  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute

  ) { console.log(this.router.getCurrentNavigation().extras.state); }

  ngOnInit() {
    console.log(history.state);
    this.datos = history.state;
  }

}
