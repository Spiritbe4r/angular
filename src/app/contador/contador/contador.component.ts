import { Component } from "@angular/core";


@Component({
    selector:'app-contador',
    template:`<h1>{{title}}</h1>

    <button (click)="acumular(base)">+1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-1</button>`,
    //styleUrls: ['../app.component.css']
})


export class ContadorComponent{

    title = 'Contador App';
    numero:number=10;

    base:number=5;


  // sumar(){
  //   this.numero+=1
  // }
    acumular(value:number){
        this.numero+=value;
    }


}