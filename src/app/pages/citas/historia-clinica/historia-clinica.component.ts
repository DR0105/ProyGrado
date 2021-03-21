import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  persona: any = [
    { nombre: 'Benito Suarez', codigo: 20212021021, docuento: 2021202120, eps: 'Famisanar', fechaDeNacimiento: 20 - 21 - 2021, vinculacion: { docente: true }, otro: 'xxxxxx' }]
  ngOnInit() {
  }

}
