import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  nuevoAnalisis: FormControl = this.fb.control('', Validators.required);
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
    piel: ['', Validators.required],
    colageno: ['', Validators.required],
    linfatico: ['', Validators.required],
    oseo: ['', Validators.required],
    muscular: ['', Validators.required],
    articular: ['', Validators.required],
    digestivo: ['', Validators.required],
    urinario: ['', Validators.required],
    sentidos: ['', Validators.required],
    cardioVascular: ['', Validators.required],
    neurologico: ['', Validators.required],
    respiratorio: ['', Validators.required],
    examenes: ['', Validators.required],
    ta: ['', Validators.required],
    fc: ['', Validators.required],
    fr: ['', Validators.required],
    sao2: ['', Validators.required],
    peso: ['', Validators.required],
    imc: ['', Validators.required],
    talla: ['', Validators.required],
    tc: ['', Validators.required],
    estadoGeneral: ['', Validators.required],
    cabezaYCuello: ['', Validators.required],
    orl: ['', Validators.required],
    ojos: ['', Validators.required],
    torax: ['', Validators.required],
    ruidosRespiratorios: ['', Validators.required],
    ruidosCardiacos: ['', Validators.required],
    abdomen: ['', Validators.required],
    neurologicoE: ['', Validators.required],
    genital: ['', Validators.required],
    extremidades: ['', Validators.required],
    id1: ['', Validators.required],
    id2: ['', Validators.required],
    id3: ['', Validators.required],
    id4: ['', Validators.required],
    analisis: this.fb.array([])
  })
  model: NgbDateStruct;
  prueba = {
    nombre: 'Benito Suárez', codigo: 20212021021, documento: 2021202120, eps: 'Famisanar', fechaDeNacimiento: new Date(),
    lugarDeNacimiento: 'Bogotá', edad: 20, vinculacion: 'Docente', tipo: 'Otro', cualTipo: 'xxxxxx', dependencia: null, procedenteDe: null,
    facultad: 'Ingeniería', carrera: 'Ingeniería de Sistemas', direccion: 'Calle falsa 123', telefono: '2021202', contactoEmergencia: 'María Camelo',
    parentesco: 'Madre', direccionContacto: 'Calle falsa 123', telefonoContacto: '2021202', situacionAcademica: 'Otro', cualSituacion: 'xxxxxx'
  }
  ngOnInit() {
  }
  get analisisArr() {
    return this.medicinaForm.get('analisis') as FormArray;
  }
  agregarAnalisis() {
    if (this.nuevoAnalisis.invalid) {
      return
    }
    this.analisisArr.push(new FormControl(this.nuevoAnalisis.value, Validators.required));
    this.nuevoAnalisis.reset();
  }
  borrarAnalisis(i: number) {
    this.analisisArr.removeAt(i);
  }
}
