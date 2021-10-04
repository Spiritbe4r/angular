import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes:string[]=['ironman','superman','spidermam','hulk']
  heroeBorrado:string='';

  BorreHeroe():void{
    this.heroeBorrado=this.heroes.pop() || '';
    console.log(this.heroeBorrado)
  
  }

  constructor() { }

  ngOnInit() {
  }

}
