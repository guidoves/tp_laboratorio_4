import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  resultado:string;
  constructor() { }

  ngOnInit() {
  }

  jugar(eleccion:number){
     let valor = Math.floor(Math.random() * (4 - 1) + 1);

     switch(eleccion){
       case 1:
        if(valor == 1){
          this.resultado = 'Empate';
          break;
        }
        if(valor == 2){
          this.resultado = 'Gano';
          break;
        }
        if(valor == 3){
          this.resultado = 'Perdio';
          break;
        }
        case 2:
        if(valor == 1){
          this.resultado = 'Perdio';
          break;
        }
        if(valor == 2){
          this.resultado = 'Empate';
          break;
        }
        if(valor == 3){
          this.resultado = 'Gano';
          break;
        }
        case 3:
        if(valor == 1){
          this.resultado = 'Gano';
          break;
        }
        if(valor == 2){
          this.resultado = 'Perdio';
          break;
        }
        if(valor == 3){
          this.resultado = 'Empate';
          break;
        }
     }
  }

}
