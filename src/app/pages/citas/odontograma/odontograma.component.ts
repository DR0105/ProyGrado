import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css']
})
export class OdontogramaComponent implements OnInit {

  convensiones: [
    { nombre: '', color: '', },
    { nombre: '', color: '', },
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor() { }

}


