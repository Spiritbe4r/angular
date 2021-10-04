import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  nombre:string='Clark Kent';
  edad:number=25;
  constructor() { }

  ngOnInit() {
  }

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtnNombre():string{
    return `${this.nombre}- ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre="spiderman"
  }
  cambiaredad():void{
    this.edad=30
  }

}
