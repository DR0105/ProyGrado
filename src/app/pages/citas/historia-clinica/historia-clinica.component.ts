import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {
  panelOpenState = false;
  constructor(private fb: FormBuilder) { }

  datosBasicos: FormGroup = this.fb.group({
    vinculacion: ['', Validators.required],
    tipo: ['', Validators.required],
    situacionAcademica: ['', Validators.required],
  })
  medicinaForm: FormGroup = this.fb.group({
    motivoConsulta: ['', Validators.required],
    patologicos: ['', Validators.required],
    hospitalarios: ['', Validators.required],
    traumaticos: ['', Validators.required],
    quirurgicos: ['', Validators.required],
    genitoUrinarios: ['', Validators.required],
    alergicos: ['', Validators.required],
    farmacologicos: ['', Validators.required],
    familiares: ['', Validators.required],
    ocupacionales: ['', Validators.required],
    menarquia: ['', Validators.required],
    fur: ['', Validators.required],
    ciclos: ['', Validators.required],
    ias: ['', Validators.required],
    compañeros: ['', Validators.required],
    fo: ['', Validators.required],
    fup: ['', Validators.required],
    pp: ['', Validators.required],
    fuccv: ['', Validators.required],
    resultadoccv: ['', Validators.required],
    examenSeno: ['', Validators.required],
    resultadoSeno: ['', Validators.required],
  })
  prueba = {
    nombre: 'Benito Suárez', codigo: 20212021021, documento: 2021202120, eps: 'Famisanar', fechaDeNacimiento: new Date(),
    lugarDeNacimiento: 'Bogotá', edad: 20, vinculacion: 'Docente', tipo: 'Otro', cualTipo: 'xxxxxx', dependencia: null, procedenteDe: null,
    facultad: 'Ingeniería', carrera: 'Ingeniería de Sistemas', direccion: 'Calle falsa 123', telefono: '2021202', contactoEmergencia: 'María Camelo',
    parentesco: 'Madre', direccionContacto: 'Calle falsa 123', telefonoContacto: '2021202', situacionAcademica: 'Otro', cualSituacion: 'xxxxxx'
  }
  ngOnInit() {
  }
}
