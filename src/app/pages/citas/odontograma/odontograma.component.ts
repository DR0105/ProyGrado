import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css']
})
export class OdontogramaComponent implements OnInit {

  convensionesArribaempleados: any[] = [
    { nombre: 'Amalgama', color: '', },
    { nombre: 'Caries', color: '', },
    { nombre: 'Endodoncia', color: '', },
    { nombre: 'Ausente', color: '', },
    { nombre: 'Resina', color: '', },
    { nombre: 'Implante', color: '', },
    { nombre: 'Sellante', color: '', },
    { nombre: 'Corona', color: '', },
  ];
  convensionesAbajo: any[] = [
    { nombre: 'Normal', color: '', },
    { nombre: 'Rotado', color: '', },
    { nombre: 'Desgaste', color: '', },
    { nombre: 'Corona Destruida', color: '', },
    { nombre: 'Fracturado', color: '', },
    { nombre: 'Erupcionado', color: '', },
    { nombre: 'Obturado', color: '', },
    { nombre: 'Opturado con resina', color: '', },
  ]

  ngOnInit(): void {

  }
  constructor() { }

}


