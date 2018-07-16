import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Wilmer';
  pi = 3.141518123456;
  shortDecimal = 1.2;
  percentageMin = 0.2;
  percentage = 0.213456789;
  date = new Date();

  objeto = {
    nombre : 'wilmer',
    apellido : 'hurtado',
    seriesFavoritas : [{id: 1, nombre: 'Dragon Ball Z'}, {id: 2, nombre: 'One Piece'}, {id: 3, nombre: 'Sailor Moon'}]
  };

  greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 1500);
  });

  constructor() {  }
}
