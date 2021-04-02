import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css']
})
export class OdontogramaComponent implements OnInit {

  convencionesArriba: any[] = [
    { nombre: 'Normal', color: 'Lavender', },
    { nombre: 'Implante', color: '#CC66CC', },
    { nombre: 'Ausente', color: 'tomato', },
    { nombre: 'Resina', color: '#CC6600', },
    { nombre: 'Caries', color: 'yellow', },
    { nombre: 'Sellante', color: 'green', },
    { nombre: 'Corona', color: 'blue', },
    { nombre: 'Desgaste', color: 'DarkKhaki', },
  ];
  convencionesAbajo: any[] = [
    { nombre: 'Fracturado', color: 'GoldenRod', },
    { nombre: 'Rotado', color: 'cyan', },
    { nombre: 'Endodoncia', color: 'orange', },
    { nombre: 'Amalgama', color: 'red', },
    { nombre: 'Erupcionado', color: 'black', },
    { nombre: 'Obturado', color: 'Maroon', },
    { nombre: 'Corona Destruida', color: 'DarkMagenta', },
    { nombre: 'Opturado con resina', color: 'DarkCyan', },
  ]

  ngOnInit(): void {

  }
  constructor() { }

}


